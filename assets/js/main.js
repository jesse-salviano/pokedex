

var pokemons = document.getElementById("pokemons");

var quantidade = 20;

for(let i = 1; i <= 300; i++){
    renderizarPokemon(i);
}

function renderizarPokemon(id){


    const urlAPI = 'https://pokeapi.co/api/v2/pokemon/' + id;

    //Faz a solicitação ao servidor da API
fetch(urlAPI).then( response => { 
    //Valida se a resposta foi OK (200)
    if(!response.ok){
        console.log("Erro na solicitação.")
    }
    //Retorna o valor conseguido
    return response.json();
})
//Mostra os dados no console.log
    
.then(data => { 

    //Escreve na pokedex os dados coletados

    let pokemon = data;

        let number = pokemon.id;
        let name = pokemon.name;
        let img = pokemon.sprites.other.home.front_default;
        let types = pokemon.types;
        let typesHTML = "";

        //Construindo o HTML dos tipos
        for(type of types){
            typesHTML += `<span>${type.type.name.toUpperCase()}</span>`
        }

        //Inserindo na page

        newHTML = pokemons.innerHTML + `<li>

        <div class="name-number">
            <span class="pokemon-name">${name.toUpperCase()}</span>
            <span class="pokemon-number">#${number}</span>
        </div>

        <div class="types-image">

            <div class="types">
                ${typesHTML}
            </div>

            <img src="${img}"  alt="${name}" class="pokemon-image">
            
        </div>
    
    </li>`;

        pokemons.innerHTML = newHTML;
    
})

//Erro
.catch(error => {
    console.log('Erro:', error);
})
}
