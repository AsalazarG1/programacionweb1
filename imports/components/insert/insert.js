import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './insert.html';

class Controlador{
  constructor($scope) {

  	this.insertInfo = function () {
  		
  	}

}}

export default angular.module('insertMod', [angularMeteor])
.component('insertComp', { 
  templateUrl : 'imports/components/insert/insert.html',
  controller : ["$scope", Controlador]
});