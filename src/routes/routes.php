<?php

namespace App\Routes;

$app->get('/', \App\Controller\ViewController::class . ":landingPage")->setName('landingPage');

$app->get('/register', \App\Controller\ViewController::class . ":registerPage")->setName('registerPage');

$app->get('/login', \App\Controller\ViewController::class . ":loginPage")->setName('loginPage');

$app->get('/dashboard', \App\Controller\ViewController::class . ":dashboardPage")->setName('dashboardPage');

$app->get('/useredit', \App\Controller\ViewController::class . ":userOptionView")->setName('userOptionView');

$app->get('/updateprofile', \App\Controller\ViewController::class . ":profileUpdateView");

$app->get('/logout', \App\Controller\ViewController::class . ":logoutView");

$app->get('/content', \App\Controller\ViewController::class . ":contentLandingView");


#forms Views
$app->get('/form', \App\Controller\ViewController::class . ":formInfo");

$app->get('/form/1', \App\Controller\ViewController::class . ":businessFormInfo");

$app->get('/form/2', \App\Controller\ViewController::class . ":companyFormDetails");

$app->get('/form/3', \App\Controller\ViewController::class . ":companyFormInfo");

$app->get('/form/4', \App\Controller\ViewController::class . ":genderFormInfo");

$app->get('/form/5', \App\Controller\ViewController::class . ":geographicFormInfo");

$app->get('/form/6', \App\Controller\ViewController::class . ":ageRangeFormInfo");

$app->get('/form/7', \App\Controller\ViewController::class . ":incomeRangeFormInfo");

$app->get('/form/8', \App\Controller\ViewController::class . ":brandsFormInfo");

$app->get('/form/9', \App\Controller\ViewController::class . ":firstDesignStyleFormInfo");

$app->get('/form/10', \App\Controller\ViewController::class . ":secondDesignStyleFormInfo");

$app->get('/form/11', \App\Controller\ViewController::class . ":designToneFormInfo");

$app->get('/form/12', \App\Controller\ViewController::class . ":marketingObjFormInfo");
