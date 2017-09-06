document.addEventListener("DOMContentLoaded", function() {
  const pokemonList = new PokemonList(POKEMONS)

  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  searchInput.addEventListener('keyup', function(event) {
    // 1. Get some input from the user
    const searchTerm = event.target.value

    // 2. Do some data manipulation / access
    pokemonList.filter(searchTerm)

    // 3. Render to the screen
    pokemonContainer.innerHTML = pokemonList.render()
  })

  pokemonContainer.addEventListener('click', function(event) {
    // Event delegation
    if (event.target.classList.contains('flip-image')) {
      // 1. Get some input from the user
      const pokemonName = event.target.dataset.pokename

      // 2. Do some data manipulation / access
      const foundPokemon = pokemonList.findByName(pokemonName)
      foundPokemon.flipImage()

      // 3. Render to the screen
      foundPokemon.getElement().innerHTML = foundPokemon.render()
    }
  })
})
