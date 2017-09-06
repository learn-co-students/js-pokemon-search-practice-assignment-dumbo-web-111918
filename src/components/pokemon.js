class Pokemon {
  constructor(name, frontSprite, backSprite) {
    this.name = name
    this.currentImg = frontSprite
    this.frontSprite = frontSprite
    this.backSprite = backSprite
  }

  flipImage() {
    if (this.currentImg === this.frontSprite) {
      this.currentImg = this.backSprite
    } else {
      this.currentImg = this.frontSprite
    }
  }

  getElement() {
    return document.getElementById(this.name)
  }

  render() {
    return `
      <div class="pokemon-card" id="${this.name}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img id="${this.name}-img" src="${this.currentImg}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
  }
}
