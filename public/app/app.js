angular.module('myApp', ['app.routes'])

.controller('mainController', function ($http) {
  var vm = this;

  vm.getVacancys = function () {
    $http.get('/api/jobs')
      .then(function(response) {
         vm.vacancys = response.data;
      })
  }
  vm.getVacancys();
})

.controller('vacancyController', function ($http) {
  var vm = this;

  vm.saveVacancy = function () {
    vm.message = {};

    $http.post('/api/jobs', vm.vacancydata)
      .then(function (response){
        vm.vacancydata = {};
        vm.message = response.message;
      });
  }

})

.controller('singleVacancyController', function($http, $routeParams) {
  var vm = this;

  vm.singleVacancy = function(){
    $http.get('/api/jobs/' + $routeParams.vacancy)
      .then(function (response) {
        vm.singleVacancy = response.data;
      })
  }
  vm.singleVacancy();
})

.controller('companyPageController', function($http, $routeParams) {
  var vm = this;

  vm.companypage = function() {
    $http.get('/api/jobs/' + $routeParams.companyname)
      .then(function(response) {
        vm.companypage = response.data;
      })
  }
  vm.companypage();
})
