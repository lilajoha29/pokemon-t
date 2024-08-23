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

    .boxF{
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 50px;
      background-color: #4E9B9A;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    label{
      align-content: center;
    }

    input{
      width:auto;
      height: 30px;
      border-color: #F07128;
      border: solid;
      border-style: 10px solid;
      border-radius: 10px;
      border: 60px;
      background-color: #efba9b;

    }

    .check{
      border-color: #F07128;
      background-color:#F07128;
      align-content: center;
    }

    .edition{
      display: flex;
      background-color: #f4884a;
      border-radius: 20px;
      height: 35px;
      width: 70px;
      padding:10px;
      text-align-last: center;
      align-self: center;
      text-align:center;
    }

    .edition:hover{
      box-shadow: 2px 2px 80px 20px #f4884a;
    }
`
