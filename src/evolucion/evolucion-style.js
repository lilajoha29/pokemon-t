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
    }

    .boxE{
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;

      align-items: center;

    }

    .pokeE{

      border-radius: 20px;
      border-color: #d80a0a;
      margin: 10px;
      list-style:none;
      background-color: #4E9B9A;
      display: flex;
      height: 250px;
      width: 70%;
      margin: 20px;
      position: relative;
      text-align: center;
      box-shadow: 2px 2px 20px 4px #c7c7c7;
      justify-content: space-around;

    }

    .info{
      align-content: center;
    }

    h2 {
        font-family: "Acme", sans-serif;
        font-size: 30px;
        font-weight: bold;
    }

    h3 {
        font-family: "Acme", sans-serif;
        font-size: 20px;
    }

    img{
      width: 200px;
      height: 200px;
      margin: 20px;
      background-color: #d80a0a;
    }

    .edit{
      display: flex;
      background-color: #f4884a;
      border-radius: 20px;
      height: 30px;
      width: 50px;
      padding:10px;
      text-align-last: center;
      align-self: center;
      text-align:center;
      box-shadow: 2px 2px 80px 20px #757575;
    }

    @media (max-width: 1144px)  {



    }

    @media (max-width: 783px)  {


    }

`

