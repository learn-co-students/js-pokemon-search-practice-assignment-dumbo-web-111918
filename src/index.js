document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded')
  //YOUR CODE HERE
  const pokemonContainer = document.querySelector('#pokemon-container')

  const pokeCard = POKEMON.map(pokemon => (

    `<div class="pokemon-card">
        <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
      </div>
    </div>`
  ))

  pokemonContainer.innerHTML = pokeCard


  pokemonContainer.addEventListener('click', e => {
    const findPoke = POKEMON.find(pokemon => pokemon.id == event.target.dataset.id)
    if (event.target.src === findPoke.sprites.front){
      event.target.src = findPoke.sprites.back
    } else {
      event.target.src = findPoke.sprites.front
    }
  })

  pokeSearch = document.getElementById('pokemon-search-input')
  pokeSearch.addEventListener('input', e => {
    const filterPoke = POKEMON.filter(pokemon => pokemon.name.includes(event.target.value.toLowerCase()))
    const filterPokeHTML = filterPoke.map(pokemon => (
      `<div class="pokemon-card">
          <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div class="pokemon-image">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>`
    ))
    pokemonContainer.innerHTML = filterPokeHTML.length ? filterPokeHTML : `<p><center>There are no Pokémon here</center></p>`
  })
})
