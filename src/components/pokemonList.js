class PokemonList {
  constructor(pokemons) {
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
}
