import { html, LitElement } from 'lit';
import style from './evolucion-style.js';
import '../edicion/edicion-p.js'
import { router } from "../../router.js"

export class Evolucion extends LitElement {
  static properties = {
    // pokemon: { type: Object }
    image: { type: String, state: true },
    name: { type: String, state: true },
    type: { type: String, state: true },
    evolutions: { type: Array, state: true },
  };

  static get styles() {
    return style;
  }

  constructor() {
    super();
    // this.pokemon = { evolutions: [] };

    // this._handlePokemonSelected = this._handlePokemonSelected.bind(this);
    // window.addEventListener('pokemon-selected', this._handlePokemonSelected);
  }

  // disconnectedCallback() {
  //   super.disconnectedCallback();
  //   window.removeEventListener('pokemon-selected', this._handlePokemonSelected);
  // }

  // _handlePokemonSelected(event) {

  //   this.pokemon = event.detail.pokemon || { evolutions: [] };
  //   this.requestUpdate();
  // }

  // _handlePokemonClick(editionPokemon) {
  //   const event = new CustomEvent('pokemon-edit', {
  //     detail: { pokemon: editionPokemon },
  //     bubbles: true,
  //     composed: true
  //   });
  //   this.dispatchEvent(event);
  //   window.history.pushState({}, '', `/edit/${editionPokemon.name}`);
  //   window.dispatchEvent(new Event('popstate'));
  // }

  async _get_data() {
    const pokemon_name = router.location.params.name;
    console.log(pokemon_name)

    await fetch("http://localhost:3002/pokemon?name=" + pokemon_name).then(
        (res) => res.json()
    ).then((pokemons) => {
      console.log(pokemons)
      const { name, image, type, evolutions } = pokemons[0];
        this.name = name;
        this.image = image;
        this.type = type;
        this.evolutions = evolutions;


    });
}

connectedCallback() {
  super.connectedCallback()
  this._get_data();

}

  render() {

    const evolutions = this.evolutions || [];
    console.log("aja",this.evolutions)

    return html`
      <div>
        <a class='title' href="/" >Atrás</a>

        <h1>${this.name}</h1>

        <ul class='boxE'>
          ${evolutions.length > 0
            ? evolutions.map(evolution => html`
              <li class='pokeE'>
                <div class='info'>
                <h2>${evolution.name}</h2>
                <h3>${evolution.type}</h3>
                </div>
                <img class="image" src="src/assets/${evolution.image+""}">
                <a class='edit' href=${"/edicion/" + this.name + "/" + evolution.name}>>Editar</a>
              </li>`)
            : html`<li>No evolutions available</li>`}
        </ul>
      </div>
    `;
  }

  // _handleNavClick(event) {
  //   event.preventDefault();
  //   window.history.pushState({}, '', '/');
  //   window.dispatchEvent(new Event('popstate'));
  // }
}

customElements.define('evolucion-p', Evolucion);
