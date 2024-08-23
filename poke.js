import { LitElement, html, css } from 'lit-element';
import style from './index-style';
import './src/edicion/edicion-p';
import './src/pokemon/pokemon-t';
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
            <a class='home' href="/" >Pokémon</a>
          </nav>
          <main id="outlet">

          </main>

      `
  }

}

customElements.define('app-component', Poke);

