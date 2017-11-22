import angular from "angular";
import angularMeteor from "angular-meteor";
import template from "./lista.html";

class Controlador{
	constructor() {
		this.titl = "Interfaz de Template";
		this.txtTarea = ""
		this.lst = [
			{tarea : "Alzar la casa"},
			{tarea : "Hacer la tarea"},
			{tarea : "Usar fb mucho tiempo"}

		];
		this.addTarea = function() {
			this.lst.push({tarea : this.txtTarea});
		}
	}
}

export default angular.module('listaMod', [angularMeteor])
.component('listaComp', {
	templateUrl : 'imports/components/lista/lista.html',
	controller : Controlador
});