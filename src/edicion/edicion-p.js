import { LitElement, html } from 'lit-element';
import style from './edicion-style'

export class EdicionP extends LitElement {
  static properties = {
    edition: { type: Object }
  };

  static get styles(){
    return style
  }

  constructor() {
    super();
    this.edition = { edits: [] };

    this._handlePokemonEdit = this._handlePokemonEdit.bind(this);
    window.addEventListener('pokemon-edit', this._handlePokemonEdit);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('pokemon-edit', this._handlePokemonEdit);
  }

  _handlePokemonEdit(event) {

    this.pokemon = event.detail.edition || { edits: [] };
    this.requestUpdate();
  }

    // let pokemonName = sessionStorage.getItem("pokemon-nombre")
    // let pokemonTipo = sessionStorage.getItem("pokemon-type")

  _handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3002/pokemon/${this.pokemonId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.edition)
    })
    .then(response => response.json())
    .then(data => console.log('Updated Pokémon:', data))
    .catch(error => console.error('Error updating Pokémon:', error));
  }

  _handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    this.edition = {
      ...this.edition,
      [name]: type === 'checkbox' ? checked : value
    };
  }

  render() {

    const edits = [this.edition];
    console.log("a editar", edits)

    return html`
      <div class='title'>
        <h2>Edit Pokémon</h2>
        <form class='boxF' @submit="${this._handleSubmit}">
        ${edits.map(edit => html`
            <label>
              Name:${edit.name}
              <input type="text" name="name" .value="${edit.name || ''}" @input="${this._handleInputChange}">
            </label>
            <br>
            <label>
              Type:
              <input type="text" name="type" .value="${edit.type || ''}" @input="${this._handleInputChange}">
            </label>
            <br>
            <label>
              Active:
              <input type="checkbox" name="active" ?checked="${edit.active || false}" @change="${this._handleInputChange}">
            </label>
            <br>
          `)}
          <button type="submit">Editar</button>
        </form>
      </div>
    `;
  }
}
customElements.define('edicion-p', EdicionP);
