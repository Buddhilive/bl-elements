import { LitElement, html, css } from "lit-element";
import { buttonStyles } from "./bl-button-style";

class BlButton extends LitElement {

    static get properties() {
        return {
            bltitle: { attribute: 'bl-title' },
        }
    }

    static get styles() {
        return buttonStyles;
    }

    constructor() {
        super();

        this.bltitle = 'Button';
    }

    render() {
        return html `
        <button>${this.bltitle}</button>
        `;
    }

    showTitle(btn) {
        this.bltitle = btn;
    }
}

customElements.define('bl-button', BlButton);