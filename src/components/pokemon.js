class Pokemon {
  constructor(name, frontSprite, backSprite) {
    this.name = name
    this.frontSprite = frontSprite
    this.backSprite = backSprite
    this.currentImg = frontSprite
  }

  flipImage() {
    this.currentImg = this.currentImg === this.frontSprite
      ? this.backSprite
      : this.frontSprite
  }

  getElement() {
    return document.getElementById(this.name)
  }

  render() {
    return `
      <div class="pokemon-card" id="${this.name}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src="${this.currentImg}">
            </div>
          </div>

          <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}">flip card</p>
        </div>
      </div>`
  }
}
