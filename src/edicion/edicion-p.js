import { LitElement, html } from 'lit-element';
import style from './edicion-style'

export class EdicionP extends LitElement {

  static get styles(){
    return style
  }

  render() {
    return html`
<div>formulario</div>

    `;
  }
}
customElements.define('edicion-p', EdicionP);
