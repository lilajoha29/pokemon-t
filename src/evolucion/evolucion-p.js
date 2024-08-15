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
    console.log(this.pokemon)
  }

  _handlePokemonClick(name) {
    window.history.pushState({}, '', `/edit/${name}`);
    window.dispatchEvent(new Event('popstate'));
  }

  render() {
    const evolutions = this.pokemon.evolutions || [];
    return html`
      <div>
        <h2>${this.pokemon.name || 'Evolutions'}</h2>
        <ul>
          ${evolutions.length > 0
            ? evolutions.map(evolution => html`
              <li>
                <img src="./assets/pokemon/${evolution.image}" alt="${evolution.name}" width="50">
                <div>${evolution.name} (${evolution.type})</div>
                <a @click="${() => this._handlePokemonClick(evolution.name)}">edit</a>
              </li>`)
            : html`<li>No evolutions available</li>`}
        </ul>
      </div>
    `;
  }
}

customElements.define('evolucion-p', Evolucion);
