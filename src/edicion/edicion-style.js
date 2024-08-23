import { css } from "lit-element";


export default css`
    :host{
      display: block;
      padding-top: 80px;
    }

    .formul{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title{
      padding:20px;
      font-size: 40px;
      cursor: pointer;
      font-family: "Acme", sans-serif;
      text-align: center;
    }

    .boxF{
      width: 500px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 50px;
      background-color: #4E9B9A;
      padding-top: 30px;
      padding-bottom: 30px;
      box-shadow: 2px 2px 20px 4px #c7c7c7;
    }

    label{
      width:300px;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      font-size: 30px;
      cursor: pointer;
      font-family: "Acme", sans-serif;
      justify-content: space-around;
    }

    input{
      width:auto;
      height: 30px;
      border-color: #F07128;
      border-style: 100px solid;
      border-radius: 10px;
      background-color: #efba9b;
      font-family: "Acme", sans-serif;
      padding: 5px;
    }

    .check{

      border-color: #F07128;
      border-style: 100px solid;
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
      font-family: "Acme", sans-serif;
      font-size: 30px;
    }

    .edition:hover{
      box-shadow: 2px 2px 80px 20px #f4884a;
    }

    @media (max-width: 1144px)  {

      .boxF {
        width: 500px;

      }

      label{
        width: auto;
        font-size: 30px;

      }

      input{
        width: 250px;


      }

    }

    @media (max-width: 783px)  {

      .boxF {
        width: 400px;

      }

      label{
        width: auto;
        font-size: 30px;

      }

      input{
        width: 250px;


      }

}
`
