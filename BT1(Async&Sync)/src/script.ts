import axios from 'axios';

let pokemons: string[] = [];
const listItem: string = document.querySelector(".list-item");
function fetchingData() {
  axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
    pokemons = res.data.results;

  render();
  });
}

function render() {
  const elememts = pokemons.map((pokemon, index) => {
    return `
      <div class="item">${index + 1}. ${pokemon.name}</div>
    `;
  });

  listItem.innerHTML = elememts.join("");

  const items = document.querySelectorAll(".item");

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.addEventListener("click", function () {
      handleClick(index);
    });
  }
}

function handleClick(index: number) {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
  .then((res) => {
    const pokemonDetail = res.data;
    renderSelectedPokemon(pokemonDetail);
  });
}

function renderSelectedPokemon(pokemon: any) {
const img = document.querySelector(".selected-item .image img");
img.src = pokemon.sprites.back_default;

const types = pokemon.types;
const property = document.querySelector(".property");

const propertyElements = types.map((data: any) => {
  return `
  <div class="property-first">${data.type.name}</div>
  `;
});

property.innerHTML = propertyElements.join("");
}

fetchingData();