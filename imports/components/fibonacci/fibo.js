import angular from "angular";
import angularMeteor from "angular-meteor";
import template from "./fibo.html";

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
  
	/*constructor (){
		var x = 0;
		var y = 1;
		var z = 0;

		this.txtfilas = 0;
		this.txtcol = 0;
		this.serieData = [];

		this.click = function () {
			this.serieData.push({data : serie[z]})
			console.log(this.serieData)
		}

	function serie() {
			
			var fin = (this.txtfilas * this.txtcol);

			console.log(fin);

			for (var i = fin.length - 1; i >= 0; i--) {
				z= x+y;
				x= y;
				y= z;

			 	serie[i] = [z]


			}


		}

	}*/
}

export default angular.module('fiboMod', [angularMeteor])
.component('fiboComp', {
	templateUrl : 'imports/components/fibonacci/fibo.html',
	controller : Controlador
});