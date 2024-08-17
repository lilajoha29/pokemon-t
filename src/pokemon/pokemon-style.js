import { css } from "lit-element";


export default css`
    :host{
      display: block;
      padding-top: 80px;

    }

    .title{
        padding:20px;
        font-size: 40px;
        cursor: pointer;
        font-family: "Acme", sans-serif;
    }

    .box{
      width: auto;
      height: auto;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding:30px;
      justify-items: center;

    }

    .poke{
      border-radius: 10px;
      border-color: #d80a0a;
      margin: 10px;
      list-style:none;
      background-color: #4E9B9A;
      border-radius: 20px;
      display: inline-block;
      height: 250px;
      width: 250px;
      margin: 20px;
      position: relative;
      text-align: center;
      box-shadow: 2px 2px 20px 4px #c7c7c7;
      justify-content: center;
      align-content: center;
    }

    h2 {
        font-family: "Acme", sans-serif;
        font-size: 35px;
        font-weight: bold;
    }

    p {
        font-family: "Acme", sans-serif;
        font-size: 20px;
    }

    img{
      width: 100%;
      height: 200px;
      padding: 20px;
      background-color: #d80a0a;
    }

    @media (max-width: 1144px)  {

        .box {
          grid-template-columns: repeat(2, minmax(0, 1fr));

        }

        }

        @media (max-width: 783px)  {

        .box {
          grid-template-columns: repeat(1, minmax(0, 1fr));

}
}

`
