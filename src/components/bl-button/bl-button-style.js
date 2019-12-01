import { css } from 'lit-element';

export const buttonStyles = css `
button {
  background: #e5e5e5;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
}

button .tool--on {
background: #aeaeae;
}

button:hover {
  background: #4d5ec1;
}

button:focus {
  outline: none;
}
  `;