import angular from "angular";
import angularMeteor from "angular-meteor";
import template from "./fer.html";

class Controlador{
  constructor (){
    this.fila=5;
    this.col=5;
    this.data = [];
  
this.tabla = function() {
  this.dts = [];
  var aux;
  var index = 0;
  for (var i = 0; i < this.fila; i++) {
    var aux = [];
    for (var j = 0; j < this.col; j++) {
      aux.push(this.getRandom(100,0));
      //aux.push(this.fibb(index++));
    }
    this.dts.push(aux);
  }
}
  this.getRandom = function(max, min){
  return Math.floor(Math.random() * (max - min + 1))+min;
  }
this.fibb = function(n) {
  var a = 0, b = 1, f = 1;
  if (n === 0) {
    return 0;
  }
  for(var i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
  }
  return f;
}
  }
  
}

export default angular.module('ferMod', [angularMeteor])
.component('ferComp', {
	templateUrl : 'imports/components/fer/fer.html',
	controller : Controlador
});