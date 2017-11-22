import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './examen.html';

class Controlador{
  constructor() {

  	this.nombre = [];

	this.clickAnadir = function() {
		this.nombre.push({name : this.nameExam + " " + this.appExam + " " + this.apmExam});
	}

	this.editar = function($index) {

		this.nombre.splice($index, 1, {name : this.nameExam + " " + this.appExam + " " + this.apmExam});
	}

	this.eliminar = function($index) {
		this.nombre.splice($index,1);
	}
}}

export default angular.module('examenMod', [angularMeteor])
.component('examenComp', { 
  templateUrl : 'imports/components/examen/examen.html',
  controller : Controlador
});