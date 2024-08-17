import { html, LitElement } from 'lit';
import style from './pokemon-style';
import '../evolucion/evolucion-p';

export class PokemonT extends LitElement {
  static properties = {
    pokemons: { type: Array }
  };

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.pokemons = [];
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('http://localhost:3002/pokemon');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Fetched data:', result);

      if (Array.isArray(result)) {
        this.pokemons = result;
      } else {
        console.error('Expected an array');
        this.pokemons = [];
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.pokemons = [];
    }
  }

  _handlePokemonClick(name) {
    const selectedPokemon = this.pokemons.find(pokemon => pokemon.name === name);
    if (selectedPokemon) {
      console.log('evoluciones l:', selectedPokemon);
      const event = new CustomEvent('pokemon-selected', {
        detail: { pokemon: selectedPokemon },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
    window.history.pushState({}, '', `/pokemon/${name}`);
    window.dispatchEvent(new Event('popstate'));
  }

  getImageUrl(imageName) {
    return `/assets/${imageName}`;
  }

  render() {
    console.log('Rendering with pokemons:', this.pokemons);

    return html`
        <h1 class="title">Pokémon List</h1>
        <div class="box">
              ${this.pokemons.map(pokemon => html`
          <div class=''>
            <div class="poke" @click="${() => this._handlePokemonClick(pokemon.name)}">
              <h2>${pokemon.name}</h2>
              <p>${pokemon.type}</p>

          </div>
        </div>
      `)}
    `;
  }
}

customElements.define('pokemon-t', PokemonT);


