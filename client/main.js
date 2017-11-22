import angular from 'angular';
import angularMeteor from 'angular-meteor';
import listaMod from "../imports/components/lista/lista";
import claseMod from "../imports/components/clase/clase";
import dformMod from "../imports/components/formulario/formulario";
import fiboMod from "../imports/components/fibonacci/fibo";
import insertMod from "../imports/components/insert/insert";
import removeMod from "../imports/components/remove/remove";
import examenMod from "../imports/components/examen/examen";
import obedMod from "../imports/components/obed/obed";
import ferMod from "../imports/components/fer/fer";


var app = angular.module("example", [angularMeteor, fiboMod.name, listaMod.name, claseMod.name, dformMod.name, insertMod.name, removeMod.name, examenMod.name, obedMod.name, ferMod.name]);
//inyeccion de dependencias 

app.controller('ctrl', ["$scope", function ($scope) {
	$scope.shw = 1;
	$scope.shw = 2;
	$scope.shw = 3;
	$scope.shw = 4;
	$scope.shw = 5;
	$scope.shw = 6;
	$scope.shw = 7;
	$scope.shw = 8;
	$scope.shw = 9;
  $scope.shw = 10;
}]);

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });
$(document).ready(function(){
      $('.slider').slider();
    });