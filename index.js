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
    selectedPokemon: { type: Object },
    editionPokemon: { type: Object }

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
    this.editionPokemon = null;
    this._handlePopState();
    this._handlePokemonSelected = this._handlePokemonSelected.bind(this);
    window.addEventListener('pokemon-selected', this._handlePokemonSelected);
    this._handlePokemonEdit = this._handlePokemonEdit.bind(this);
    window.addEventListener('pokemon-edit', this._handlePokemonEdit);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('pokemon-selected', this._handlePokemonSelected);
    window.removeEventListener('pokemon-edit', this._handlePokemonEdit);
  }

  async _handlePopState() {
    window.addEventListener('popstate', async () => {
      const path = window.location.pathname.split('/');
      if (path[1] === 'pokemon') {
        this.currentView = 'evolucion';
        this.pokemonName = path[2];
        this.editingId = null;
        await this._fetchPokemonData(this.selectedPokemon);
      } else if (path[1] === 'edit') {
        this.currentView = 'edit';
        this.editingId = path[2];
        this.pokemonName = null;
        await this._fetchPokemonData(this.editionPokemon);
      } else {
        this.currentView = 'list';
        this.pokemonName = null;
        this.editingId = null;
        this.selectedPokemon = null;
      }
      this.requestUpdate();
    });
  }

  _handlePokemonSelected(event) {
    this.selectedPokemon = event.detail.pokemon;
    this.currentView = 'evolucion';
    this.requestUpdate();
    window.history.pushState({}, '', `/pokemon/${this.selectedPokemon.name}`);
    window.dispatchEvent(new Event('popstate'));

  }

  _handlePokemonEdit(event) {
    this.editionPokemon = event.detail.pokemon;
    this.currentView = 'edit';
    this.requestUpdate();
    window.history.pushState({}, '', `/edit/${this.editionPokemon.name}`);
    window.dispatchEvent(new Event('popstate'));
    console.log("datos para editar",this.editionPokemon)

  }

  async _fetchPokemonData(pokemonId) {
    console.log('Fetching data for:', pokemonId);
    try {
      const response = await fetch(`http://localhost:3002/pokemon/${pokemonId}`);
      if (response.ok) {
        const data = await response.json();
        if (this.currentView === 'edit') {
          this.editionPokemon = data;
          console.log('Data fetched for editing:', this.editionPokemon);
        } else {
          this.selectedPokemon = data;
          console.log('Data fetched for selection:', this.selectedPokemon);

        }
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
            ? html`<evolucion-p .pokemon=${this.selectedPokemon}></evolucion-p>`
            : this.currentView === 'edit'
              ? html`<edicion-p .pokemon=${this.editionPokemon}></edicion-p>`
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
