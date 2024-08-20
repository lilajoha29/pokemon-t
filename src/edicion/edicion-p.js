import { LitElement, html } from 'lit-element';
import style from './edicion-style'
import './modal/modal-e'

export class EdicionP extends LitElement {
  static properties = {
    edition: { type: Object },
    showModal: { type: Boolean }
  };

  static get styles(){
    return style;

  }

  constructor() {
    super();
    // this.edition = { edits: [] };
    this.edition = { name: '', type: '', active: false };
    console.log('Constructor:', this.edition);

    this.showModal = false;

    this._handlePokemonEdit = this._handlePokemonEdit.bind(this);
    window.addEventListener('pokemon-edit', this._handlePokemonEdit);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('pokemon-edit', this._handlePokemonEdit);
  }

  _handlePokemonEdit(event) {
    console.log('Received event data edit:', event.detail.pokemon);
    // this.edition = event.detail.edition || { edits: [] };
    this.edition = event.detail.pokemon || { name: '', type: '', active: false };
    this.requestUpdate();

  }

    // let pokemonName = sessionStorage.getItem("pokemon-nombre")
    // let pokemonTipo = sessionStorage.getItem("pokemon-type")



  _handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    this.edition = {
      ...this.edition,
      [name]: type === 'checkbox' ? checked : value
    };
    if (name === 'active' && checked) {
      this.showModal = true;
    }
  }

  _handleModalClose() {
    this.showModal = false;
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.showModal = false;

  }

  render() {
    const { name, type, active } = this.edition;
    console.log("a editar", this.edition);

    return html`
      <div class='title'>
        <h2>Editar Pokémon</h2>
        <form class='boxF' @submit="${this._handleSubmit}">
          <label>
            Nombre:
            <input type="text" name="name" .value="${name || ''}" @input="${this._handleInputChange}">
          </label>
          <br>
          <label>
            Tipo:
            <input type="text" name="type" .value="${type || ''}" @input="${this._handleInputChange}">
          </label>
          <br>
          <label>
            Pokemon repetido:
            <input type="checkbox" name="active" ?checked="${active || false}" @change="${this._handleInputChange}">
          </label>
          <br>
          <a class="edition" type="submit">Editar</a>
        </form>
      </div>

      <modal-e .show="${this.showModal}" @modal-close="${this._handleModalClose}">
        <h3>Puedes cambiarlo en el punto mas cercano</h3>
      </modal-e>
    `;
  }
}
customElements.define('edicion-p', EdicionP);
