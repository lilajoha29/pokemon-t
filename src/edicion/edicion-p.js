import { LitElement, html } from 'lit-element';
import style from './edicion-style'

export class EdicionP extends LitElement {
  static properties = {
    editionId: { type: String },
    edition: { type: Object }
  };

  static get styles(){
    return style
  }

  constructor() {
    super();
    this.edition = { name: '', type: '', active: false }; // Valores predeterminados
    this.pokemonId = null;
  }

  firstUpdated() {
    this._fetchPokemonData();
  }

  async _fetchPokemonData() {
    if (!this.pokemonId) return;

    try {
      const response = await fetch(`http://localhost:3002/pokemon/${this.pokemonId}`);
      if (response.ok) {
        this.edition = await response.json();
      } else {
        console.error('Error fetching Pokémon data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

    console.log('Submitting form with:', this.edition);

    // Aquí deberías enviar los datos actualizados al servidor
    // Por ejemplo, con una solicitud PUT
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
    return html`
      <div class='title'>
        <h2>Edit Pokémon</h2>
        <form class='boxF' @submit="${this._handleSubmit}">
          <label>
            Name:
            <input type="text" name="name" .value="${this.edition.name}" @input="${this._handleInputChange}">
          </label>
          <br>
          <label>
            Type:
            <input type="text" name="type" .value="${this.edition.type}" @input="${this._handleInputChange}">
          </label>
          <br>
          <label>
            Active:
            <input type="checkbox" name="active" ?checked="${this.edition.active}" @change="${this._handleInputChange}">
          </label>
          <br>
          <button type="submit">Save</button>
        </form>
      </div>
    `;
  }
}
customElements.define('edicion-p', EdicionP);
