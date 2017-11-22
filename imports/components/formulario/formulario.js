import angular from "angular";
import angularMeteor from "angular-meteor";
import template from "./formulario.html";

class ControladorF{
	constructor() {
		this.titl = "Formulario";
		this.placeholder = "example@xxxxx.com"
	}
}

export default angular.module('dformMod', [angularMeteor])
.component('dformComp', {
	templateUrl : 'imports/components/formulario/formulario.html',
	controller : ControladorF
});