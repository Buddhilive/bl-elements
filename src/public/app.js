var btn = document.querySelector("bl-button");
var selectEl = document.querySelector("bl-select");
//var bltable = document.querySelector('bl-table');
var arrayOptions = [
  ["Sri Lanka", "LK"],
  ["India", "IN"],
  ["Pakistan", "PK"],
  ["Bangladesh", "BD"],
  ["Nepal", "NP"],
  ["Bhutan", "BT"],
  ["Afghanistan", "AF"],
  ["Maldives", "MV"],
];
/* var blData = {
        tbheader: ['Country', 'Code'],
        tbdata: [
            ['Sri Lanka', 'LK'],
            ['India', 'IN'],
            ['Pakistan', 'PK'],
            ['Bangladesh', 'BD'],
            ['Nepal', 'NP'],
            ['Bhutan', 'BT'],
            ['Afghanistan', 'AF'],
            ['Maldives', 'MV'],
            ['United States of America', 'US']
        ]
    }; */

btn.addEventListener("click", function () {
  console.log($("form").serializeArray());
  selectEl.setOptions(arrayOptions);
});

function showMsg() {
  console.log("hello");
}

window.onload = () => {
  //bltable.setTableData(blData);
};
