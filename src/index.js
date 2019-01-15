document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  let pcBox = document.getElementById('pokemon-container')
  let searchBar = document.getElementById('pokemon-search-input')

  function createPokemon(pokemon){
    let pokeCard = document.createElement('DIV')
    pokeCard.className = "pokemon-card"
    let pokeFrame = document.createElement('DIV')
    pokeFrame.className = "pokemon-frame"
    pokeFrame.addEventListener('click', function(e){
      e.stopPropagation()
      let pokeId 
      pokeId = e.target.lastChild.lastChild.dataset.id
      let poke
      for (let p of POKEMON) {if (p.id == pokeId) {poke = p}}
      let imgTag = pcBox.lastChild.lastChild.lastChild
      if (imgTag.className === 'pokemon-image'){
        pokeFrame.lastChild.lastChild.src = ""
        pokeFrame.lastChild.style.width = "200px"
        pokeFrame.lastChild.style.height = "100.2px"
        pokeFrame.lastChild.innerText =  `Name: ${poke.name.toUpperCase()}\nAbilities: ${poke.abilities}\nType(s): ${poke.types}`
        pokeFrame.lastChild.dataset.id = poke.id
      }
    })
    let cText = document.createElement('H1')
    cText.className = pokemon.name
    let pokeImage = document.createElement('DIV')
    pokeImage.className = "pokemon-image"
    let pokeSprite = document.createElement('IMG')
    pokeSprite.dataset.id= pokemon.id
    // pokeSprite.dataset.action = "flip"
    pokeSprite.className = "toggle-sprite"
    pokeSprite.src = pokemon.sprites.front
    pokeImage.addEventListener('click', function(e){
        e.stopPropagation()
        let pokeId
        pokeId = e.target.dataset.id
        let poke
        for (let p of POKEMON) {if (p.id == pokeId) {poke = p}}
        e.target.innerText = ""
        let pokeSprite = document.createElement('IMG')
        pokeSprite.dataset.id= pokemon.id
        pokeSprite.className = "toggle-sprite"
        pokeSprite.src = pokemon.sprites.front
        pokeSprite.addEventListener('click', function(e){
          e.stopPropagation()
          if (pokeSprite.src === pokemon.sprites.front){
          pokeSprite.src = pokemon.sprites.back
          } else if (pokeSprite.src === pokemon.sprites.back){
            pokeSprite.src = pokemon.sprites.front
          }
        })
        e.target.append(pokeSprite)
    })
    pokeSprite.addEventListener('click', function(e){
      e.stopPropagation()
      if (pokeSprite.src === pokemon.sprites.front){
      pokeSprite.src = pokemon.sprites.back
      } else if (pokeSprite.src === pokemon.sprites.back){
        pokeSprite.src = pokemon.sprites.front
      }
    })
    pokeImage.appendChild(pokeSprite)
    pokeFrame.appendChild(cText)
    pokeFrame.appendChild(pokeImage)
    pokeCard.appendChild(pokeFrame)
    pcBox.appendChild(pokeCard)
  }


  POKEMON.forEach(pokemon => {
    createPokemon(pokemon)
  })

  searchBar.addEventListener('keyup', function(e){
    let searchInput = e.target.value
    while (pcBox.firstChild) {
      pcBox.removeChild(pcBox.firstChild);
    }
    POKEMON.forEach(pokemon => {
      if (pokemon.name.includes(searchInput)) {
        createPokemon(pokemon)
      }
    })
  })


})
