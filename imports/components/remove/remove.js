import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './remove.html';

class Controlador{
  constructor($scope) {

  	this.removeInfo = function () {
  		
  	}

}}

export default angular.module('removeMod', [angularMeteor])
.component('removeComp', { 
  templateUrl : 'imports/components/remove/remove.html',
  controller : ["$scope",Controlador]
});