"use strict";

var search = function search(event) {
  event.preventDefault();
    var baseURL = "https://pokeapi.co/api/v2/pokemon/";
    
    var pokenumber1 = document.getElementById("pokenumber1").value;
    $.get(baseURL + pokenumber1, function (pokemon) {
    document.getElementById("pokeimage1").src = pokemon.sprites.front_default;
    });
    
    var pokenumber2 = document.getElementById("pokenumber2").value;
  $.get(baseURL + pokenumber2, function (pokemon) {
    document.getElementById("pokeimage2").src = pokemon.sprites.front_default;
  });
    
    var pokenumber3 = document.getElementById("pokenumber3").value;
  $.get(baseURL + pokenumber3, function (pokemon) {
    document.getElementById("pokeimage3").src = pokemon.sprites.front_default;
  });
    
    var pokenumber4 = document.getElementById("pokenumber4").value;
  $.get(baseURL + pokenumber4, function (pokemon) {
    document.getElementById("pokeimage4").src = pokemon.sprites.front_default;
  });
    
    var pokenumber5 = document.getElementById("pokenumber5").value;
  $.get(baseURL + pokenumber5, function (pokemon) {
    document.getElementById("pokeimage5").src = pokemon.sprites.front_default;
  });
    
    var pokenumber6 = document.getElementById("pokenumber6").value;
  $.get(baseURL + pokenumber6, function (pokemon) {
    document.getElementById("pokeimage6").src = pokemon.sprites.front_default;
  });
    
    var pokenumber7 = document.getElementById("pokenumber7").value;
  $.get(baseURL + pokenumber7, function (pokemon) {
    document.getElementById("pokeimage7").src = pokemon.sprites.front_default;
  });
    
    var pokenumber8 = document.getElementById("pokenumber8").value;
  $.get(baseURL + pokenumber8, function (pokemon) {
    document.getElementById("pokeimage8").src = pokemon.sprites.front_default;
  });
    
    var pokenumber9 = document.getElementById("pokenumber9").value;
  $.get(baseURL + pokenumber9, function (pokemon) {
    document.getElementById("pokeimage9").src = pokemon.sprites.front_default;
  });
    
    var pokenumber10 = document.getElementById("pokenumber10").value;
  $.get(baseURL + pokenumber10, function (pokemon) {
    document.getElementById("pokeimage10").src = pokemon.sprites.front_default;
  });
    
    var pokenumber11 = document.getElementById("pokenumber11").value;
  $.get(baseURL + pokenumber11, function (pokemon) {
    document.getElementById("pokeimage11").src = pokemon.sprites.front_default;
  });
    
    var pokenumber12 = document.getElementById("pokenumber12").value;
  $.get(baseURL + pokenumber12, function (pokemon) {
    document.getElementById("pokeimage12").src = pokemon.sprites.front_default;
  });
    
};


document.getElementById("pokeform1").addEventListener('submit', search);

document.getElementById("pokeform2").addEventListener('submit', search);

document.getElementById("pokeform3").addEventListener('submit', search);

document.getElementById("pokeform4").addEventListener('submit', search);

document.getElementById("pokeform5").addEventListener('submit', search);

document.getElementById("pokeform6").addEventListener('submit', search);

document.getElementById("pokeform7").addEventListener('submit', search);

document.getElementById("pokeform8").addEventListener('submit', search);

document.getElementById("pokeform9").addEventListener('submit', search);

document.getElementById("pokeform10").addEventListener('submit', search);

document.getElementById("pokeform11").addEventListener('submit', search);

document.getElementById("pokeform12").addEventListener('submit', search);










