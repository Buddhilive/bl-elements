import { LitElement, html, css } from "lit-element";
import { blselect_style } from "./bl-select-style";

class BlSelect extends LitElement {

    static get properties() {
        return {
            bltitle: { attribute: 'bl-title' },
            blname: { attribute: 'bl-name' },
            bloptions: String,
            toggleCheck: Boolean,
            blsearch: { attribute: 'bl-search' }
        }
    }

    static get styles() {
        return blselect_style;
    }

    constructor() {
        super();

        this.bltitle = 'Button';
        this.blname = 'Bl-Options';
        this.bloptions = [
            ['none', 'null']
        ]
        this.toggleCheck = false;
        this.blsearch = false;

        /* this.shadowRoot.addEventListener('click', function(ev) {
            //console.log(ev)
            console.log(this.shadowRoot.querySelectorAll('option'));
        }); */
    }

    render() {
            return html `
    <div class="bl-dropdown-wrapper">
                <button type="button" class="bl-dropbtn" @click="${this.toggleMenu}">
                ${this.bltitle}
                <div class="bl-dropdown-arrow">
                ${this.toggleCheck ? html`&#x25B4;` : html`&#x25BE;`}
                </div>
            </button>
                <div id="bl-dropdown" class="bl-dropdown-content">
                ${this.blsearch ? html `<input type="text" placeholder="Search.." class="bl-input" @keyup="${this.filterOptions}"/>`: html ``}                  
                    <input name=${this.blname} type="text" class="bl-value-holder"/>
                    ${this.bloptions.map(optn => (
            html`<option @click="${(e) => this.itemSelected(e)}" value=${optn[1]}>${optn[0]}</option>`
        ))}
                </div>
            </div>
    `;
    }

    setOptions(values) {
        for (let i = 0; i < values.length; i++) {
            this.bloptions[i] = []
            for (let j = 0; j < 2; j++) {
                this.bloptions[i][j] = values[i][j];
            }
        }
        this.update(this.bloptions);
    }

    toggleMenu() {
        this.querySelector('.bl-dropdown-content').classList.toggle('show');
        this.toggleCheck = !this.toggleCheck;
        //console.log(this.shadowRoot.querySelector('.bl-dropdown-content'))
    }

    filterOptions() {

        var input, filter, a, i;
        input = this.querySelector(".bl-input");
        filter = input.value.toUpperCase();
        var div = this.querySelector(".bl-dropdown-content");
        a = div.querySelectorAll("option");
        for (i = 0; i < a.length; i++) {
            var txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }

    }

    itemSelected(ev) {
        if (ev.target.tagName == 'OPTION') {
            //console.log(document);
            this.bltitle = ev.target.innerText;
            this.querySelector('.bl-value-holder').value = ev.target.value;
            this.querySelector('.bl-dropdown-content').classList.remove('show');
            this.toggleCheck = !this.toggleCheck;
            this.querySelector(".bl-input").value = "";
            let div = this.querySelector(".bl-dropdown-content");
            let opt = div.querySelectorAll("option");
            for (let i=0; i<opt.length;i++){
                opt[i].style.display = "";
            }
        }
    }

    getValue() {
        let selectedValue = this.querySelector('.bl-value-holder').value;
        return selectedValue;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('bl-select', BlSelect);