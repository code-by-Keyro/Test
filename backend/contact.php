<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => message('config_missing')]);
    exit;
}

$config = require $configFile;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => message('method')]);
    exit;
}

if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['success' => true, 'message' => message('success')]);
    exit;
}

$rateFile = sys_get_temp_dir() . '/studio-zwei-contact-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown') . '.txt';
$limit = (int)($config['rate_limit_seconds'] ?? 60);
if ($limit > 0 && is_file($rateFile) && (time() - (int)file_get_contents($rateFile)) < $limit) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => message('rate')]);
    exit;
}

$fields = [
    'first_name' => 'Vorname',
    'last_name' => 'Name',
    'company' => 'Firma',
    'contact_person' => 'Ansprechpartner',
    'email' => 'E-Mail',
    'phone' => 'Telefonnummer',
    'packages' => 'Gewünschte Pakete',
    'project_description' => 'Projektbeschreibung',
    'budget' => 'Budget',
    'deadline' => 'Deadline'
];

$required = ['first_name', 'last_name', 'email', 'packages', 'project_description', 'privacy'];
$clean = [];
foreach ($fields as $key => $label) {
    if ($key === 'packages') {
        $selectedPackages = $_POST['packages'] ?? [];
        if (!is_array($selectedPackages)) {
            $selectedPackages = [$selectedPackages];
        }
        $selectedPackages = array_filter($selectedPackages, static fn($value) => trim((string)$value) !== '');
        $clean[$key] = implode(', ', array_map(static fn($value) => clean((string)$value), $selectedPackages));
        continue;
    }
    $clean[$key] = clean((string)($_POST[$key] ?? ''));
}

foreach ($required as $key) {
    if ($key === 'privacy') {
        if (empty($_POST['privacy'])) fail('required');
        continue;
    }
    if ($clean[$key] === '') fail('required');
}

if (!filter_var($clean['email'], FILTER_VALIDATE_EMAIL)) {
    fail('email');
}

$bodyLines = [];
foreach ($fields as $key => $label) {
    $bodyLines[] = $label . ': ' . ($clean[$key] !== '' ? $clean[$key] : '-');
}
$bodyLines[] = 'Datenschutz-Zustimmung: ja';
$bodyLines[] = 'IP-Adresse: ' . ($_SERVER['REMOTE_ADDR'] ?? '-');
$body = implode("\n", $bodyLines);

$to = (string)($config['recipient_email'] ?? '');
$from = (string)($config['sender_email'] ?? '');
$subject = (string)($config['subject'] ?? 'Neue Website-Anfrage über Kontaktformular');

if (!filter_var($to, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    fail('config');
}

$headers = [
    'From: ' . mailHeader((string)($config['sender_name'] ?? 'Website Kontaktformular')) . ' <' . $from . '>',
    'Reply-To: ' . $clean['email'],
    'Content-Type: text/plain; charset=UTF-8',
    'X-Content-Type-Options: nosniff'
];

$sent = mail($to, mb_encode_mimeheader($subject, 'UTF-8'), $body, implode("\r\n", $headers));
if (!$sent) {
    fail('send', 500);
}

file_put_contents($rateFile, (string)time(), LOCK_EX);
echo json_encode(['success' => true, 'message' => message('success')]);

function clean(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\0"], '', $value);
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function mailHeader(string $value): string
{
    return str_replace(["\r", "\n"], '', $value);
}

function fail(string $key, int $status = 400): void
{
    http_response_code($status);
    echo json_encode(['success' => false, 'message' => message($key)]);
    exit;
}

function message(string $key): string
{
    $lang = ($_POST['lang'] ?? 'de') === 'en' ? 'en' : 'de';
    $messages = [
        'de' => [
            'success' => 'Vielen Dank. Ihre Anfrage wurde gesendet. Wir melden uns spätestens innerhalb von 24 Stunden.',
            'required' => 'Bitte füllen Sie alle Pflichtfelder aus.',
            'email' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
            'send' => 'Die Nachricht konnte nicht gesendet werden.',
            'config' => 'Die Kontaktformular-Konfiguration ist unvollständig.',
            'config_missing' => 'Die Datei backend/config.php fehlt. Bitte aus config.example.php erstellen.',
            'method' => 'Diese Methode ist nicht erlaubt.',
            'rate' => 'Bitte warten Sie kurz, bevor Sie erneut senden.'
        ],
        'en' => [
            'success' => 'Thank you. Your inquiry has been sent. We will respond within 24 hours at the latest.',
            'required' => 'Please fill in all required fields.',
            'email' => 'Please enter a valid email address.',
            'send' => 'The message could not be sent.',
            'config' => 'The contact form configuration is incomplete.',
            'config_missing' => 'The file backend/config.php is missing. Please create it from config.example.php.',
            'method' => 'This method is not allowed.',
            'rate' => 'Please wait a moment before sending again.'
        ]
    ];
    return $messages[$lang][$key] ?? $messages[$lang]['send'];
}
