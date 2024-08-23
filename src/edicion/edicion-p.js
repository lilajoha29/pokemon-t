import { LitElement, html } from 'lit-element';
import style from './edicion-style'
import './modal/modal-e';
import { router } from "../../router.js"


export class EdicionP extends LitElement {
  static properties = {
    showModal: { type: Boolean },
    active: { type: Boolean },
    name: { type: String, state: true },
    type: { type: String, state: true },
    edicion: { type: Array, state: true },
  };

  static get styles(){
    return style;
  }

  constructor() {
    super();

    this.showModal = false;
    this.active = false;
  }



  async _get_data() {
    const pokemon_name = router.location.params.name;
    const evolucion_name = router.location.params.evolution_name;

    await fetch("http://localhost:3002/pokemon?name=" + pokemon_name).then(
        (res) => res.json()
    ).then((evoluciones) => {

      const { evolutions } = evoluciones[0];
      const _serch = evolutions.find(evol => evol.name == evolucion_name)
        this.name = _serch.name;
        this.type = _serch.type;
        this.edicion = _serch;

    });
}

connectedCallback() {
  super.connectedCallback()
  this._get_data();

}

_handleInputChange(event) {
  const { name, value, type, checked } = event.target;
  if (name === 'active') {
    this.active = checked;
    if (checked) {
      this.showModal = true;
    }
  } else {
    this[name] = type === 'checkbox' ? checked : value;
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


    return html`
      <div class='title'>
        <h2>Editar Pokémon</h2>
        <form class='boxF' @submit="${this._handleSubmit}">
        ${this.edicion && html`
          <label>
            Nombre:
            <input type="text" name="name" .value="${this.name}" >
          </label>
          <br>
          <label>
            Tipo:
            <input type="text" name="type" .value="${this.type}">
          </label>
          <br>
          `}
          <label>
            Pokemon repetido:
            <input class="check" type="checkbox" name="active" ?checked="${this.active}" @change="${this._handleInputChange}">
          </label>
          <br>
          <a class="edition" type="submit"> Editar</a>
        </form>
      </div>

      <modal-e .show="${this.showModal}" @modal-close="${this._handleModalClose}">
        <h3>Puedes cambiarlo en el punto mas cercano</h3>
      </modal-e>
    `;
  }
}
customElements.define('edicion-p', EdicionP);
