<?php
$databases['default']['default'] = array (
  'database' => 'drupal9_sitebuilding-2.local.com',
  'username' => 'root',
  'password' => 'VvOxPAQbPG3i+*',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'driver' => 'mysql',
);
ini_set('memory_limit', '-1');

/**
 * Show all error messages, with backtrace information.
 *
 * In case the error level could not be fetched from the database, as for
 * example the database connection failed, we rely only on this value.
 */
$config['system.logging']['error_level'] = 'verbose';

/**
 * Disable CSS and JS aggregation.
 */
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

$conf['securepages_enable'] = 0;

error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

$conf['preprocess_js'] = FALSE;
$conf['preprocess_css'] = FALSE;

$config_directories['sync'] = '../config/sync';

$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
