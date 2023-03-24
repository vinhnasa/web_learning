"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var pokemons = [];
var listItem = document.querySelector(".list-item");
function fetchingData() {
    axios_1.default.get("https://pokeapi.co/api/v2/pokemon").then(function (res) {
        pokemons = res.data.results;
        render();
    });
}
function render() {
    var elememts = pokemons.map(function (pokemon, index) {
        return "\n      <div class=\"item\">".concat(index + 1, ". ").concat(pokemon.name, "</div>\n    ");
    });
    listItem.innerHTML = elememts.join("");
    var items = document.querySelectorAll(".item");
    var _loop_1 = function (index) {
        var element = items[index];
        element.addEventListener("click", function () {
            handleClick(index);
        });
    };
    for (var index = 0; index < items.length; index++) {
        _loop_1(index);
    }
}
function handleClick(index) {
    axios_1.default
        .get("https://pokeapi.co/api/v2/pokemon/".concat(index + 1))
        .then(function (res) {
        var pokemonDetail = res.data;
        renderSelectedPokemon(pokemonDetail);
    });
}
function renderSelectedPokemon(pokemon) {
    var img = document.querySelector(".selected-item .image img");
    img.src = pokemon.sprites.back_default;
    var types = pokemon.types;
    var property = document.querySelector(".property");
    var propertyElements = types.map(function (data) {
        return "\n  <div class=\"property-first\">".concat(data.type.name, "</div>\n  ");
    });
    property.innerHTML = propertyElements.join("");
}
fetchingData();
