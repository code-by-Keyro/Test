<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$allowed = [
    'website-packages' => __DIR__ . '/../data/website-packages.json',
    'maintenance-packages' => __DIR__ . '/../data/maintenance-packages.json',
    'faqs' => __DIR__ . '/../data/faqs.json',
    'references' => __DIR__ . '/../data/reference-sites.json',
    'translations' => __DIR__ . '/../data/translations.json',
];

$type = (string)($_GET['type'] ?? '');
if (!isset($allowed[$type])) {
    http_response_code(404);
    echo json_encode(['error' => 'Unknown data type']);
    exit;
}

$file = $allowed[$type];
if (!is_file($file)) {
    http_response_code(404);
    echo json_encode(['error' => 'Data file not found']);
    exit;
}

readfile($file);
