import { html, LitElement } from 'lit';
import style from './index-style';
import './src/edicion/edicion-p';
import './src/pokemon/Pokemon-T';
import './src/evolucion/evolucion-p';

export class AppComponent extends LitElement {
  static properties = {
    currentView: { type: String },
    pokemonName: { type: String },
    editingId: { type: String },
    selectedPokemon: { type: Object }
  };

  static get styles(){
    return style
  }

  constructor() {
    super();
    this.currentView = 'list';
    this.pokemonName = null;
    this.editingId = null;
    this.selectedPokemon = null;
    this._handlePopState();
  }

  async _handlePopState() {
    window.addEventListener('popstate', async () => {
      const path = window.location.pathname.split('/');
      if (path[1] === 'pokemon') {
        this.currentView = 'evolucion';
        this.pokemonName = path[2];
        this.editingId = null;
        await this._fetchPokemonData(this.pokemonName);
      } else if (path[1] === 'edit') {
        this.currentView = 'edit';
        this.editingId = path[2];
        this.pokemonName = null;
      } else {
        this.currentView = 'list';
        this.pokemonName = null;
        this.editingId = null;
        this.selectedPokemon = null; 
      }
      this.requestUpdate();
    });
  }

  async _fetchPokemonData(name) {
    try {
      const response = await fetch(`http://localhost:3002/pokemon/${name}`);
      if (response.ok) {
        this.selectedPokemon = await response.json();
      } else {
        console.error('Error fetching Pokémon data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }

  render() {
    return html`
      <nav class='nav'>
        <a class='home' href="/" @click="${this._handleNavClick}">Pokémon</a>

      </nav>

      <div>
        ${this.currentView === 'list'
          ? html`<pokemon-t></pokemon-t>`
          : this.currentView === 'evolucion'
            ? html`<evolucion-p .pokemon=${{ name: this.pokemonName }}></evolucion-p>`
            : this.currentView === 'edit'
              ? html`<edicion-p .pokemonId=${this.editingId}></edicion-p>`
              : html`<div>Page not found</div>`}
      </div>
    `;
  }

  _handleNavClick(event) {
    event.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }


}
customElements.define('app-component', AppComponent);
