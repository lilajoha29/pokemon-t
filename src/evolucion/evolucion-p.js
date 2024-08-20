import { html, LitElement } from 'lit';
import style from './evolucion-style.js';
import '../edicion/edicion-p.js'

export class Evolucion extends LitElement {
  static properties = {
    pokemon: { type: Object }
  };

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.pokemon = { evolutions: [] };

    this._handlePokemonSelected = this._handlePokemonSelected.bind(this);
    window.addEventListener('pokemon-selected', this._handlePokemonSelected);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('pokemon-selected', this._handlePokemonSelected);
  }

  _handlePokemonSelected(event) {

    this.pokemon = event.detail.pokemon || { evolutions: [] };
    this.requestUpdate();
  }

  _handlePokemonClick(name) {
      const editionPokemon = this.pokemon.evolutions.find(pokemon => pokemon.name === name);
      if (editionPokemon) {
        console.log('edit:', editionPokemon);
        const event = new CustomEvent('pokemon-edit', {
          detail: { pokemon: editionPokemon },
          bubbles: true,
          composed: true
        });
        // sessionStorage.setItem("pokemon-nombre", editionPokemon.name);
        // sessionStorage.setItem("pokemon-type", editionPokemon.type);
        this.dispatchEvent(event);
      }
    window.history.pushState({}, '', `/edit/${name}`);
    window.dispatchEvent(new Event('popstate'));

  }

  render() {

    const evolutions = this.pokemon.evolutions || [];
    console.log(evolutions)

    return html`
      <div class='title'>
        <h2>${this.pokemon.name || 'Evolutions'}</h2>

        <ul class='boxE'>
          ${evolutions.length > 0
            ? evolutions.map(evolution => html`
              <li class='pokeE'>

                <div class='info'>
                <h2>${evolution.name}</h2>
                <h3>${evolution.type}</h3>
                </div>
                <img class="image" src="src/assets/${evolution.image+""}">
                <a class='edit' @click="${() => this._handlePokemonClick(evolution.name)}">Editar</a>
              </li>`)
            : html`<li>No evolutions available</li>`}
        </ul>
      </div>
    `;
  }
}

customElements.define('evolucion-p', Evolucion);
