angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
  $routeProvider

    .when('/', {
      templateUrl: 'app/views/pages/home.html'
    })

    .when('/vacancypost', {
      templateUrl: 'app/views/pages/vacancypost.html',
      controller: 'vacancyController',
      controllerAs: 'job'
    })

    .when('/vacancys/:vacancy', {
      templateUrl: 'app/views/pages/singlevacancy.html',
      controller: 'singleVacancyController',
      controllerAs: 'single'
    });

    $locationProvider.html5Mode(true);
})
