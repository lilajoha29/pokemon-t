import { html, LitElement } from 'lit';
import style from './pokemon-style';
import '../evolucion/evolucion-p'


export class PokemonT extends LitElement {
  static properties = {
    pokemons: { type: Array }
  };

  static get styles(){
    return style
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
      console.log('Emitting pokemon-selected event with:', selectedPokemon);
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


  render() {
    console.log('Rendering with pokemons:', this.pokemons);

    return html`
      <div class='title'>Pokémones</div>
      <ul class='box'>
        ${this.pokemons.length > 0
          ? this.pokemons.map(pokemon => html`
            <li class='poke' @click="${() => this._handlePokemonClick(pokemon.name)}">
              <h2>${pokemon.name}</h2>
              <img src="../assets/" + "bulbasaur.png" alt="${pokemon.name}">
              <h3>${pokemon.type}</h3>
            </li>`)
          :  html`<li>No Pokémon available</li>`}
      </ul>
    `;
  }
}

customElements.define('pokemon-t', PokemonT);
