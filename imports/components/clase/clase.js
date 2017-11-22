import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './clase.html';

class Controlador{
  constructor() {
    this.msg="";
    this.moviesArray = ["IT", "Harry potter", "y donde estan las rubias?"];
    this.countEnter = 0;
    this.countExit = 0;
    this.countMove = 0;
    this.moveX = 0;
    this.moveY =0;
   
    
    this.moviesObject = [
      { //index[0]
		"num" : 1,
		"nombre" : "Dumbo",
		"rating" : "AA",
		"pop" : "70%",
		"img" : "https://resizing.flixster.com/hsaDQDuTZlxQap6OhyzNfUfuG3Q=/fit-in/80x80/v1.bTsxMTIwNzEzNDtqOzE3NTQ0OzEyMDA7MTk4MDsyNjQw",
		"url" : "https://es.wikipedia.org/wiki/Dumbo"
	},
	{ //index[1]
		"num" : 2,
		"nombre" : "Rey Leon",
		"rating" : "AA",
		"pop" : "93%",
		"img" : "https://resizing.flixster.com/XHt-40dDR02yl18cnESO9uYVfWk=/fit-in/80x80/v1.bTsxMTE2MDQ3NztqOzE3NTQ0OzEyMDA7MTAxMzsxNTAw",
		"url" : "https://es.wikipedia.org/wiki/El_rey_le%C3%B3n"
	},
	{ //index[2]
		"num" : 3,
		"nombre" : "Tarzan",
		"rating" : "AA",
		"pop" : "75%",
		"img" : "https://resizing.flixster.com/P0P_4Rw639vX42x-OUhjtTGNmkI=/fit-in/80x80/v1.bTsxMTIwMzg4NTtqOzE3NTQ0OzEyMDA7MTgwMDsyNDAw",
		"url" : "https://es.wikipedia.org/wiki/Tarz%C3%A1n_(pel%C3%ADcula_de_1999)"
	},
	{ //index[3]
		"num" : 4,
		"nombre" : "Avengers",
		"rating" : "AA",
		"pop" : "91%",
		"img" : "https://resizing.flixster.com/8gUpjPkdUN4qZuI0biSzu4oQpSs=/fit-in/80x80/v1.bTsxMTIzMTk5MztqOzE3NTQ0OzEyMDA7OTAwOzEyMDA",
		"url" : "https://es.wikipedia.org/wiki/The_Avengers_(pel%C3%ADcula_de_2012)"
	}, 
	{ //index[4]
		"num" : 5,
		"nombre" : "Frozen",
		"rating" : "AA",
		"pop" : "86%",
		"img" : "https://resizing.flixster.com/4yJhiDKPq4C9GHmCw-hCfWSvzlU=/fit-in/80x80/v1.bTsxMTE3MzU4NDtqOzE3NTQ0OzEyMDA7MjE2NzszMjEw",
		"url" : "https://es.wikipedia.org/wiki/Frozen_(pel%C3%ADcula_de_2013)"
	}
	];
  
  this.msenter = function() {
    this.countEnter++;
  }
  this.msexit = function() {
    this.countExit++;
  }
  this.msmove = function($event) {
    this.moveX = $event.x;
    this.moveY = $event.y;
  }
    this.kPress = function($event) {
    if ($event.keyCode ===13) {
        alert("Presionaste Enter")
        }
  }


}}

export default angular.module('claseMod', [angularMeteor])
.component('claseComp', { 
  templateUrl : 'imports/components/clase/clase.html',
  controller : Controlador
});