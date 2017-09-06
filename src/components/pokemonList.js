class PokemonList {
  constructor(pokemons) {
    // Keep a reference of all the POKEMON
    this.pokemons = pokemons.map(function(pokemon) {
      return new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
    })
    this.filteredPokemons = []
  }

  filter(searchTerm) {
    if (!searchTerm) {
      this.filteredPokemons = []
    } else {
      this.filteredPokemons = this.pokemons.filter(function(pokemon) {
        return pokemon.name.includes(searchTerm) // OR return pokemon.name.match(new RegExp(searchTerm))
      })
    }
  }

  render() {
    const filteredPokemonTemplate = this.filteredPokemons.map(function renderPokemon(pokemon) {
      return pokemon.render()
    }).join('')

    return filteredPokemonTemplate
  }
}
