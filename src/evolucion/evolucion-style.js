import { css } from "lit-element";


export default css`
    :host{
      display: block;
      padding-top: 80px;
    }

    .title{
      padding:20px;
      font-size: 30px;
      cursor: pointer;
      font-family: "Acme", sans-serif;
      text-decoration: none;
      color: #000000;

    }

    .boxE{
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:30px;
    }

    .pokeE{

      border-radius: 20px;
      border-color: #d80a0a;
      margin: 10px;
      list-style:none;
      background-color: #4E9B9A;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 350px;
      width: 70%;
      margin: 20px;
      justify-content: space-around;
      position: relative;
      text-align: center;
      box-shadow: 2px 2px 20px 4px #c7c7c7;
    }

    .pokeE:hover{
      box-shadow: 2px 2px 80px 20px #29F0EF;
    }

    .info{
      align-content: center;
    }

    h1{
      font-family: "Acme", sans-serif;
        font-size: 60px;
        font-weight: bold;
        text-align: center;
    }

    h2 {
        font-family: "Acme", sans-serif;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }

    h3 {
        font-family: "Acme", sans-serif;
        font-size: 20px;
    }

    .image{
      width: 200px;
      height: 200px;
      padding: 5px;
    }

    .image:hover {
      transform: scale(1.7);
    }

    .edit{
      display: flex;
      background-color: #f4884a;
      border-radius: 20px;
      height: 35px;
      width: 70px;
      padding:10px;
      margin:5px;
      text-align-last: center;
      align-self: center;
      text-align:center;
      font-family: "Acme", sans-serif;
      font-size: 30px;
      text-decoration: none;
      color: #000000;
    }

    .edit:hover{
      box-shadow: 2px 2px 80px 20px #f4884a;
    }

    @media (max-width: 1144px)  {
      .boxE{
        padding: inherit;
      }

      .pokeE{
        height: 400px;
        width: 350px;
        margin: 10px;
        flex-direction: column;
      }
      .image{
      width: 150px;
      height: 150px;
    }
    .image:hover {
      transform: scale(1.1);
    }

    }

    @media (max-width: 783px)  {
      .boxE{
        padding: inherit;
      }

      .pokeE{
        height: 400px;
        width: 350px;
        margin: 10px;
        flex-direction: column;
      }

      .image{
      width: 150px;
      height: 150px;
    }

    .image:hover {
      transform: scale(1.5);
    }
    }

`

