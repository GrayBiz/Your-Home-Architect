// MODULE
var yhaWeb = angular.module('yhaWeb', ['ngRoute', 'ngResource']);

// ROUTES

yhaWeb.config(function($routeProvider){
    
    $routeProvider
    
    .when ('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when ('/about', {
        templateUrl: 'pages/about.html',
        controller: 'pagesController'
    })
    
    .when ('/philosophy', {
        templateUrl: 'pages/philosophy.html',
        controller: 'pagesController'
    })
    
    .when ('/process', {
        templateUrl: 'pages/process.html',
        controller: 'pagesController'
    })
    
    .when ('/blog', {
        templateUrl: 'pages/blog.html',
        controller: 'pagesController'
    })
    
    .when ('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'pagesController'
    })
});

// SERVICES



// CONTROLLERS

    yhaWeb.controller('homeController', ['$scope', function($scope) {
        
        
        
    }]);
    
// DIRECTIVES