import { LitElement, html, css } from 'lit-element';
import style from './index-style';
import './src/edicion/edicion-p';
import './src/pokemon/Pokemon-T';
import './src/evolucion/evolucion-p';
import { initRouter } from "./router";

export class Poke extends LitElement {

  firstUpdated() {
    super.firstUpdated();
    initRouter.call(this);
}


    static get styles(){
    return style
  }


  render() {
      return html`
          <nav class='nav'>
            <a class='home' href="/" @click="${this._handleNavClick}">Pokémon</a>
          </nav>
          <main id="outlet">

          </main>

      `
  }
  _handleNavClick(event) {
    event.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  }
}

customElements.define('app-component', Poke);

