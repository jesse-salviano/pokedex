var pokemons = document.getElementById("pokemons");

const pokeapi = {};

pokeapi.getPokemons = function (page, limit) {
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  let requestUrls = [];

  for (let i = limit * page - (limit - 1); i <= limit * page; i++) {
    url = apiUrl + i;

    requestUrls.push(url);
  }

  requestUrls = requestUrls.map((pokemonUrl) => {
    return fetch(pokemonUrl).then((response) => response.json());
  });

  return Promise.all(requestUrls);
};

pokeapi.convertPokeToHtml = (pokemon) => {
  return `<li class=${pokemon.types[0].type.name}>

            <div class="name-number">
                <span class="pokemon-name">${pokemon.name.toUpperCase()}</span>
                <span class="pokemon-number">#${pokemon.id}</span>
            </div>
    
            <div class="types-image">
    
                <div class="types">
                    ${pokeapi.converTypesToHtml(pokemon)}
                </div>
    
                <img src="${pokemon.sprites.other.home.front_default}"  alt="${pokemon.name.toUpperCase()}" class="pokemon-image">
                
            </div>
        
        </li>`;
};

pokeapi.converTypesToHtml = (pokemon) => {

    typesHtml = '';

    for(type of pokemon.types){
        typesHtml +=  `<span> ${type.type.name.toUpperCase()} </span>`
    }

    return typesHtml;
}




