import { html, LitElement } from 'lit';
import style from './evolucion-style.js';
import '../edicion/edicion-p.js'
import { router } from "../../router.js"

export class Evolucion extends LitElement {
  static properties = {
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

  }

  async _get_data() {
    const pokemon_name = router.location.params.name;

    await fetch("http://localhost:3002/pokemon?name=" + pokemon_name).then(
        (res) => res.json()
    ).then((pokemons) => {
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
                <a class='edit' href=${"/edicion/" + this.name + "/" + evolution.name}>Editar</a>
              </li>`)
            : html`<li>No evolutions available</li>`}
        </ul>
      </div>
    `;
  }


}

customElements.define('evolucion-p', Evolucion);
