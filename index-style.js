import { css } from "lit-element";


export default css`
  :host {
        display: block;
        background-color: #ffff;

      }

      .nav {
        width: 100%;
        height: 60px;
        background-color: #F07128;
        box-shadow: 0 25px 50px -20px #B06031;
        position: fixed;
        z-index: 5;
      }

      .home {
        padding:20px;
        font-size: 50px;
        cursor: pointer;
        font-family: "Acme", sans-serif;
        color: #ffff;
        text-decoration: none;
      }
`
