//variables
const contenedor = document.getElementById('pokemons-tarjeta');
const contenedorTipos = document.getElementById('navegador')

//funciones
function tarjetasPokemon(pokemon){ //esta funcion crear un div con su correspondiente clase, llena los datos de los pokemon y le da color, luego actualiza el DOM
    let cantidadTipos = pokemon.types.length
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("container1","pokemons-tarjeta")

    //almacenamos la cantidad de tipos del pokemon
    let tiposHTML = "";
    for (let i = 0; i < cantidadTipos; i++) {
        tiposHTML += `<p class="navegador-parrafo color-${pokemon.types[i].type.name}">${pokemon.types[i].type.name}</p>`;
    }

    //luego creamos toda la tarjeta e incluimos los tipos de pokemon a la tarjeta
    tarjeta.innerHTML = `
                    <div class="tarjeta-imagen">
                        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                    </div>
                    <div class="container1 tarjeta-cabecera">
                        <h4>${pokemon.forms[0].name}</h4>
                        <div class="container2">${tiposHTML}</div>
                        
                    </div>
    `;

    //insertamos la tarjeta a el contenedor
    contenedor.appendChild(tarjeta);
}

function tipoPokemon(tipos){ //esta funcion crear un div con su correspondiente clase y llena los datos de los tipos de pokemon, luego actualiza el DOM
    
    for(let i = 1; i <= tipos.count; i++){
        let nombre = tipos.results[i].name
        const divTipos = document.createElement("div")
        divTipos.classList.add("container2")
        divTipos.innerHTML = `
                    <p class="navegador-parrafo color-${nombre}">${nombre}</p>
        `;
        contenedorTipos.appendChild(divTipos);
    }  
}

//funcionamiento
fetch("https://pokeapi.co/api/v2/type/").then((response) => response.json()).then(data => tipoPokemon(data))

async function obtenerPokemones() {
    const urlBase = "https://pokeapi.co/api/v2/pokemon/";
    const promesas = [];

    for (let i = 1; i <= 151; i++) {
        promesas.push(fetch(urlBase + i).then(response => response.json()));
    }

    const pokemones = await Promise.all(promesas);
    pokemones.forEach(pokemon => tarjetasPokemon(pokemon));
}

obtenerPokemones();

