import { LitElement, html } from 'lit-element';
import { bltable_styles } from './bl-table-styles.js'

class BLTable extends LitElement {

    static get properties() {
        return {
            bldatasource: Array,
            blSorted: Boolean,
            blfooter: { attribute: 'bl-enable-footer' },
            blperpage: { attribute: 'bl-data-perpage' },
            blpagination: { attribute: 'bl-pagination' }
        }
    }

    static get styles() {
        return bltable_styles;
    }

    constructor() {
        super();

        this.bldatasource = {
            tbheader: ['name', 'age'],
            tbdata: [
                ['buddhi', '27'],
                ['ira', '56']
            ]
        };

        this.blfooter = false;
        this.blperpage = 0;
        this.blpagination = false;
        this.blSorted = true;
    }

    render() {
            let checkPagination = (this.blpagination == "true");
            return html `
        <table>
  <thead>
    <tr>
    ${this.loadTableHeaders(this.bldatasource)}
    </tr>
  </thead>
  <tbody>
      ${this.loadCellData(this.bldatasource)}
    </tbody>
    ${this.blfooter ? html`<tfoot></tfoot>` : html``}
  
</table>
<div class="paginator">${checkPagination ? this.paginatorCall() : html``}</div>
        `;
    }


    loadCellData(tbCell) {
        //console.log(tbCell);
        let checkPagination = (this.blpagination == "true");
        //console.log(checkPagination)
        let tbData;
        if (checkPagination) {

            let countPerpage = parseInt(this.blperpage);
            tbData = tbCell.tbdata.map(function (headName, cIndex) {
                let tbRow;
                if (cIndex < countPerpage) {
                    tbRow = html`<tr class="active">
                ${headName.map(cellData => (
                        html`
                <td>${cellData}</td>
                `
                    ))}
                </tr>`
                } else {
                    tbRow = html`<tr>
                ${headName.map(cellData => (
                        html`
                <td>${cellData}</td>
                `
                    ))}
                </tr>`
                }

                return tbRow;
            });
        } else {
            tbData =
                tbCell.tbdata.map(headName => (
                    html`<tr class="active">
                ${headName.map(cellData => (
                        html`
                <td>${cellData}</td>
                `
                    ))}
                </tr>`
                ));
        }
        return tbData;
    }

    paginationControl() {
        let countPerpage = parseInt(this.blperpage);
        let paginator = [];
        let rowCount = this.shadowRoot.querySelectorAll('tr').length - 1;
        let pageCounter = rowCount / countPerpage;
        //console.log(rowCount);
        for (let i = 0; i < pageCounter; i++) {
            let paginatedCell = ``;
            if (i == 0) {
                paginatedCell = html`
            <div class="paginator-page page-active" @click=${(e) => this.showPage(e)}>
            ${i + 1}
        </div>
            `
            } else {
                paginatedCell = html`
            <div class="paginator-page" @click=${(e) => this.showPage(e)}>
            ${i + 1}
        </div>
            `
            }

            paginator.push(paginatedCell);
        }
        return paginator;
    }

    paginatorCall() {
        const htmlObj = this.paginationControl();
        const returnObj = html`${htmlObj.map((objContent) => (
            html`${objContent}`
        ))}`;
        //console.log(returnObj)
        //this.shadowRoot.querySelector('.paginator-page').classList.add('page-active');
        return returnObj
    }

    showPage(e) {
        let countPerpage = parseInt(this.blperpage);
        var starti = parseInt(e.target.innerHTML);
        var indexI = (countPerpage * (starti - 1)) + 1;
        let indexEnd = indexI + countPerpage;

        this.shadowRoot.querySelectorAll('tr').forEach((trElement, trIndex) => {
            if (trIndex >= indexI && trIndex < indexEnd) {
                trElement.classList.add('active');
            } else {
                //console.log(trElement.classList.value);
                if (trElement.classList.value == "active") {
                    trElement.classList.remove('active');
                }
            }
        });

        this.shadowRoot.querySelectorAll('.paginator-page').forEach((pages) => {
            pages.classList.remove('page-active');
        });
        e.target.classList.add('page-active');
    }

    loadTableHeaders(tbCell) {
        let tbData =
            tbCell.tbheader.map((headName, cIndex) => (
                html`
                <th @click=${() => this.sortTable(cIndex)}>${headName}
                <span>${this.blSorted ? html`&#x25B2;` : html`&#x25BC;`}</span>
            </th>
            `
            ));
        return tbData;
    }

    sortTable(cIndex) {
        let tbSpan = this.shadowRoot.querySelectorAll('span');

        tbSpan.forEach((sortElement) => {
            if (tbSpan[cIndex] == sortElement) {
                tbSpan[cIndex].style.visibility = 'visible';
            } else {
                sortElement.style.visibility = 'hidden';
            }
            
        });    

        let blTable = this.shadowRoot.querySelector('table');
        let blRows = blTable.rows;
        let isSorted = false;
        let sortCounter = 0;
        let acdc = "ac";
        let looper = true;
        while (looper) {
            looper = false;
            for (let i = 1; i < (blRows.length - 1); i++) {
                isSorted = false;

                let tdA = blRows[i].getElementsByTagName('td')[cIndex];
                let tdB = blRows[i + 1].getElementsByTagName('td')[cIndex];
                let tdAString = tdA.innerHTML.toLowerCase().replace(/<!---->/g, "");
                let tdBString = tdB.innerHTML.toLowerCase().replace(/<!---->/g, "");

                if (tdAString > tdBString && acdc == "ac") {
                    isSorted = true;
                    this.blSorted = true;
                } else if (tdAString < tdBString && acdc == "dc") {
                    isSorted = true;
                    this.blSorted = false;
                }

                if (isSorted) {
                    blRows[i].parentNode.insertBefore(blRows[i + 1], blRows[i]);
                    looper = true;
                    sortCounter++;
                } else {
                    if (sortCounter == 0 && acdc == "ac") {
                        acdc = "dc";
                        looper = true;

                    }
                }
            }

        }
    }

    setTableData(tbData) {
        this.bldatasource = tbData;
        this.update(this.bldatasource);
    }

    /* createRenderRoot() {
        return this;
    } */
}

customElements.define('bl-table', BLTable);