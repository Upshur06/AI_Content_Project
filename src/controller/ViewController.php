<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Views\Twig;

class ViewController{
    public function landingPage(Request $request, Response $response)
    {
        $view = Twig::fromRequest($request);
        return $view->render($response, 'landingPage.twig');
    }

    public function registerPage(Request $request, Response $response)
    {
        $view = Twig::fromRequest($request);
        return $view->render($response, 'register.twig');
    }

    public function loginPage(Request $request, Response $response)
    {
        $view = Twig::fromRequest($request);
        return $view->render($response, 'login.twig');
    }

    public function dashboardPage(Request $request, Response $response)
    {
        $view = Twig::fromRequest($request);
        return $view->render($response, 'dashboard.twig');
    }

    public function userOptionView(Request $request, Response $response)
    {
        $view = Twig::fromRequest($request);
        return $view->render($response, 'userOption.twig');
    }

    public function profileUpdateView(Request $request, Response $response)
    {
        $view = Twig::fromRequest($request);
        return $view->render($response, 'profileUpdate.twig');

    }

    public function logoutView(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'logout.twig');
    }

    public function contentLandingView(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'contentView.twig');
    }

    public function formInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'form.twig');
    }

    public function businessFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'businessFormInfo.twig');
    }

    public function companyFormDetails(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'companyFormDetails.twig');
    }

    public function companyFormInfo(Request $requst, Response $response){
        $view = Twig::fromRequest($requst);
        return $view->render($response, 'companyFormInfo.twig');
    }

    public function genderFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'genderFormInfo.twig');
    }

    public function geographicFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'geographicFormInfo.twig');
    }

    public function ageRangeFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'ageRangeFormInfo.twig');
    }

    public function incomeRangeFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'incomeRangeFormInfo.twig');
    }

    public function firstDesignStyleFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'firstDSFormInfo.twig');   
    }

    public function secondDesignStyleFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'secondDSFormInfo.twig');
    }

    public function designToneFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'dsToneFormInfo.twig');
    }

    public function marketingObjFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'marketingObjFormInfo.twig');
    }

    public function brandsFormInfo(Request $request, Response $response){
        $view = Twig::fromRequest($request);
        return $view->render($response, 'brandsFormInfo.twig');
    }
}