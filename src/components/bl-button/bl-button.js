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
        <a>${this.bltitle}</a>
        `;
    }

    showTitle(btn) {
        this.bltitle = btn;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('bl-button', BlButton);