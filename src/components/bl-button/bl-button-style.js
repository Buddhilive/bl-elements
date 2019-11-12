import { css } from 'lit-element';

export const buttonStyles = css `
button {
  padding: 0.6rem;
  color: #fff;
  background: #3f51b5;
  display: inline-block;
  border-radius: 3px;
  -webkit-box-shadow: 2px 2px 5px #aeaeae;
          box-shadow: 2px 2px 5px #aeaeae;
  border-style: none;
  cursor: pointer;
}

button:hover {
  background: #4d5ec1;
}

button:focus {
  outline: none;
}
  `;