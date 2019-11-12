import { css } from "lit-element";

export const bltable_styles = css `
:host {
  display: inline-block;
}
table {
  border-collapse: collapse;
  width: 100%;
  }
  th {
    cursor: pointer;
  }

  th, td {
    text-align: left;
    padding: 0.5rem;
    border: 0.2px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  span {
    display: inline-flex;
    float: right;
    visibility: hidden;
  }

  tbody tr {
    display: none;
  }

  .active {
    display: table-row;
  }

  .paginator {
    padding: 0.1rem;
    margin-top: 0.2rem;
  }

  .paginator-page {
    height: 2rem;
    width: 2rem;
    margin: 0.1rem;
    background: #3e78ef;
    color: #ffffff;
    font-weight: 700;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    line-height: 2rem;
  }

  .page-active {
    background: #4434ab;
  }
`;