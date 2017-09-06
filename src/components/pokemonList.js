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
      return `
        <div class="pokemon-card" id="${pokemon.name}">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img id="${pokemon.name}-img" src="${pokemon.frontSprite}">
            </div>
          </div>
          <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
          </div>
        </div>`
    }).join('')

    return filteredPokemonTemplate
  }
}
