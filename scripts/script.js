//variables
const contenedor = document.getElementById('pokemons-tarjeta');
const contenedorTipos = document.getElementById('navegador')

//funciones
function tarjetasPokemon(pokemon){ //esta funcion crear un div con su correspondiente clase, llena los datos de los pokemon y le da color, luego actualiza el DOM
    const tarjeta = document.createElement("div")
    tarjeta.classList.add("container1","pokemons-tarjeta")
    tarjeta.innerHTML = `
                    <div class="tarjeta-imagen">
                        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                    </div>
                    <div class="tarjeta-cabecera">
                        <h4>${pokemon.forms[0].name}</h4>
                    </div>
    `;
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

fetch("https://pokeapi.co/api/v2/type/").then((response) => response.json()).then(data => tipoPokemon(data))

//funcionamiento
for(let i = 1; i <= 1302; i++){
    let urlpokemon = "https://pokeapi.co/api/v2/pokemon/"

    fetch(urlpokemon+i).then((response) => response.json()).then(data => tarjetasPokemon(data))
}

