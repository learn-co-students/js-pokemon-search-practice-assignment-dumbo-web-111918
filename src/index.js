document.addEventListener("DOMContentLoaded", function() {
  const pokemonList = new PokemonList(POKEMONS)

  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  searchInput.addEventListener('keyup', function(event) {
    // 1. Get some input from the user
    const searchTerm = event.target.value

    // if (!searchTerm) {
      // pokemonContainer.innerHTML = ''
      // return
    // }

    // 2. Do some data manipulation / access
    // const filteredPokemon = POKEMONS.filter(function(pokemon) {
      // return pokemon.name.includes(searchTerm) // OR return pokemon.name.match(new RegExp(searchTerm))
    // })

    // 3. Render to the screen
    // const filteredPokemonTemplate = filteredPokemon.map(renderPokemon).join('')
    // pokemonContainer.innerHTML = filteredPokemonTemplate
  })

  pokemonContainer.addEventListener('click', function() {
    console.log('handle flip on click')
  })
})
