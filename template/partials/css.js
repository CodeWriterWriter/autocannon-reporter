'use strict'

module.exports = function (results, hx) {
  // put any css needed between style tags
  return hx`
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background: white;
      margin: 0px;
    }
    .object {
      margin: 0 0 15px 0;
    }
    .title{
      background: #2C3E50;
      color: white;
      padding: 10px 30px;
      margin: 0px 0px 15px 0px;
    }
    .symbol {
      position: relative;
      float: right;
    }
    .heading{
      background: #ddd;
      border: 1px solid #333;
      padding: 0px 10px;
      border-radius: 5px 5px 0px 0px;
    }
    .content {
      border: 1px solid #333;
      padding: 10px;
      border-radius: 0px 0px 5px 5px;
    }
    .no-border {
      border: 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .report{
      margin: 0 30px;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      align-content: space-around;

    }
    .table {
      display: flex;
      flex-direction: column-reverse;
      padding: 10px;
    }

    #more-button {
      border-style: none;
      background: none;
      font: 16px Serif;
      color: blue;
      margin: 0 0 10px 0;
    }

    #grow input:checked {
      color: red;
    }

    #more-button:hover {
      color: black;
    }

    #grow {
      -moz-transition: height .5s;
      -ms-transition: height .5s;
      -o-transition: height .5s;
      -webkit-transition: height .5s;
      transition: height .5s;
      overflow: hidden;
    }

  </style>
  `
}
