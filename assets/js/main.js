var page = 1;
var limit = 12; 

var pokemons = document.getElementById("pokemons");

document.getElementById("btnPrevious").addEventListener("click", () => {if(page > 1){page--; printPokemonPage(page, limit, pokemons)}});
document.getElementById("btnNext").addEventListener("click", () => {page++; printPokemonPage(page, limit, pokemons);});


function printPokemonPage (page, limit, target) {
    pokeapi.getPokemons(page, limit).then((pokemonsList) => {
      console.log(pokemonsList);
  
      pokemonsList = pokemonsList.map((pokemon) =>
        pokeapi.convertPokeToHtml(pokemon)
      );
  
      pokemonsList = pokemonsList.join("");
  
      target.innerHTML = pokemonsList;
    });
  };

printPokemonPage(page, limit, pokemons);