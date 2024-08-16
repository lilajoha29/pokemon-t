import { html, LitElement } from 'lit';
import style from './evolucion-style.js';

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
    console.log('Received pokemon-selected event with:', event.detail.pokemon);
    this.pokemon = event.detail.pokemon || { evolutions: [] };
    this.requestUpdate();
  }

  _handlePokemonClick(name) {
      const editPokemon = this.pokemon.evolutions.find(pokemon => pokemon.name === name);
      if (editPokemon) {
        console.log('edit:', editPokemon);
        const event = new CustomEvent('pokemon-selected', {
          detail: { pokemon: editPokemon },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
      }
    window.history.pushState({}, '', `/edit/${name}`);
    window.dispatchEvent(new Event('popstate'));
  }

  render() {

    const evolutions = this.pokemon.evolutions || [];

    return html`
      <div class='title'>
        <h2>${this.pokemon.name || 'Evolutions'}</h2>

        <ul class='boxE'>
          ${evolutions.length > 0
            ? evolutions.map(evolution => html`
              <li class='pokeE'>
                <img src="../assets/pokemon/${evolution.image}" alt="${evolution.name}" >
                <div class='info'>
                <h2>${evolution.name}</h2>
                <h3>${evolution.type}</h3>
                </div>
                <a class='edit' @click="${() => this._handlePokemonClick(evolution.name)}">Edit</a>
              </li>`)
            : html`<li>No evolutions available</li>`}
        </ul>
      </div>
    `;
  }
}

customElements.define('evolucion-p', Evolucion);
