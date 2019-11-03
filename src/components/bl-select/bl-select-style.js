import { css } from "lit-element";

export const blselect_style = css `
:host {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .bl-dropbtn {
    background-color: #eee;
    color: #000;
    padding: 0.5rem;
    font-size: 14px;
    border: none;
    border-bottom: 2px solid #1527e1;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
  }

  .bl-dropbtn:hover {
    background-color: #c8c8c8;
    outline: none;
  }
  
  .bl-dropbtn:focus {
    background-color: #c8c8c8;
    outline: none;
  }

  .bl-dropdown-arrow {
    display: inline-flex;
  }

   .bl-input {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    background-position: 14px 12px;
    background-repeat: no-repeat;
    font-size: 14px;
    padding: 12px;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  .bl-input:focus {
    outline: 3px solid #ddd;
  }
  
   .bl-value-holder {
    display: none;
  }
  
   .bl-dropdown-wrapper {
    position: relative;
    display: inline-block;
  }
  
   .bl-dropdown-content {
    display: none;
    position: absolute;
    background-color: #eee;
    min-width: auto;
    border: 1px solid #ddd;
    z-index: 1;
    border-radius: 0px 0px 5px 5px;
  }
  
   .bl-dropdown-content option {
    color: #000;
    padding: 12px 16px;
    font-size: 14px;
    text-decoration: none;
    display: block;
  }
  
   .bl-dropdown-content option:hover {
    background-color: #bbbbbb;
  }
  
   .show {
    display: block;
  } 

`;