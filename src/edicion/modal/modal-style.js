import { css } from "lit-element";


export default css`
    :host{
      display: block;
      padding-top: 80px;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .modal.show {
      display: block;
    }

    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      border-radius: 20px;
      width: 50%;
      height: auto;
      font-family: "Acme", sans-serif;
    }

    .close {
      color: #F07128;
      float: right;
      font-family: "Acme", sans-serif;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
    @media (max-width: 1144px)  {
      .modal-content{
        width: 60%;
        height: auto;
      }


    }

    @media (max-width: 783px)  {
      .modal-content{
        width: 80%;
        height: auto;

      }

    }

`

