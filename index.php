<?php

namespace App;

require __DIR__ . '/vendor/autoload.php';

use Slim\Factory\AppFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

$app = AppFactory::create();

$twig = Twig::create('template', ['cache' => false]);


$app->add(TwigMiddleware::create($app, $twig));

require('src/routes/routes.php');

$app->run();