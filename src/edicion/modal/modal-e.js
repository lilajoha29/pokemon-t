import { LitElement, html } from 'lit-element';
import style from './modal-style';

export class Modal extends LitElement {
  static properties = {

    show: { type: Boolean }
  };

  static get styles(){
    return style;

  }

  constructor() {
    super();
    this.show = false;
  }

  _closeModal() {
    this.dispatchEvent(new CustomEvent('modal-close', { bubbles: true, composed: true }));
  }






  render() {


    return html`

      <div class="modal ${this.show ? 'show' : 'hide'}" @click="${this._closeModal}">
        <div class="modal-content" @click="${e => e.stopPropagation()}">
          <span class="close" @click="${this._closeModal}">&times;</span>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
customElements.define('modal-e', Modal);
