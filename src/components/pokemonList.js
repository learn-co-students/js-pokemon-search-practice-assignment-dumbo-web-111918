class PokemonList {
  constructor(pokemons) {
    this.containerElement = document.getElementById('pokemon-container')
    this.searchElement = document.getElementById('pokemon-search-input')

    this.filteredPokemons = []
    this.pokemons = pokemons
      .map(pokemon => {
        return new Pokemon(
          pokemon.name,
          pokemon.sprites.front,
          pokemon.sprites.back
        )
      })
  }

  getContainerElement() {
    return this.containerElement
  }

  getSearchElement() {
    return this.searchElement
  }

  filter(searchTerm) {
    this.filteredPokemons = searchTerm
      ? this.pokemons.filter(pokemon => pokemon.name.includes(searchTerm))
      : []
  }

  render() {
    return this.filteredPokemons
      .map(pokemon => pokemon.render())
      .join('')
  }

  findByName(pokemonName) {
    return this.pokemons.find(function(pokemon) {
      return pokemon.name === pokemonName
    })
  }
}
