document.addEventListener("DOMContentLoaded", function() {
  const pokemonList = new PokemonList(POKEMONS)

  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  searchInput.addEventListener('keyup', function() {
    console.log('handle search on keyup')
  })

  pokemonContainer.addEventListener('click', function() {
    console.log('handle flip on click')
  })
})
