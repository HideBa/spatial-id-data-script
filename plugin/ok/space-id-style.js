reearth.ui.show(
  `
  <style>
  html {
    overflow: hidden;
  }
  .body {
    margin: 0 auto;
    max-height: 750px;
    font-family: 'Hiragino Kaku Gothic Pro';
  }
  .show {
    display: flex;
    overflow: scroll;
    max-height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 342px;
    font-family: 'Hiragino Kaku Gothic Pro';
    margin-top: 12px;
  }
  button.accordion {
    background-color: #FFFFFF;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    padding: 10px;
    gap: 10px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-family: 'Hiragino Kaku Gothic Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 130%;
    transition: 0.4s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    /* drop-shadow / 0.15 */
    border-radius: 4px;
  }
  .accordion button:hover,
  .accordion button:focus {
    cursor: pointer;
    color: #03b5d2;
  }
  .accordion button:hover::after,
  .accordion button:focus::after {
    cursor: pointer;
    color: #03b5d2;
    border: 1px solid #03b5d2;
  }
  .accordion button .accordion-title {
    padding: 1em 1.5em 1em 0;
  }
  /* button.accordion.active,
  button.accordion:hover {
    background-color: #ddd;
  } */
  .panel {
    display: none;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    color: white;
    transition: 0.2s ease-out;
  }
  .panel-content {
    padding: 0 22px;
    font-family: 'Hiragino Kaku Gothic Pro';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 130%;
  }
  .accordion:after {
    position: relative;
    top: 4px;
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-right: 0.1em solid rgba(0, 0, 0, 0.4);
    border-top: 0.1em solid rgba(0, 0, 0, 0.4);
    transform: rotate(135deg);
    margin-right: 0.5em;
    margin-left: 1.0em;
  }
  .accordion:after {
    position: relative;
    top: 4px;
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-right: 0.1em solid rgba(0, 0, 0, 0.4);
    border-top: 0.1em solid rgba(0, 0, 0, 0.4);
    transform: rotate(135deg);
    margin-right: 0.5em;
    margin-left: 1.0em;
  }
  .active:after {
    position: relative;
    top: 4px;
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-right: 0.1em solid rgba(0, 0, 0, 0.4);
    border-top: 0.1em solid rgba(0, 0, 0, 0.4);
    transform: rotate(-45deg);
    margin-right: 0.5em;
    margin-left: 1.0em;
  }
  .content {
    background-color: #ffffff !important;
  }
  table,
  td,
  th {
    border: 1px solid #D1D1D1;
    padding: 12px;
    font-size: 12px;
    font-family: 'Hiragino Kaku Gothic Pro';
    color: rgba(0, 0, 0, 0.4);
  }
  table {
    width: 100%;
    max-height: 400px;
    display: block;
    overflow: scroll;
    border-collapse: collapse;
  }
  .element {
    overflow: scroll;
    max-height: 500px;
    width: 100%;
  }
  .empty-content {
    color: #fff;
    font-family: 'Hiragino Kaku Gothic Pro';
    font-size: 14px;
  }
  .tabs {
    display: flex;
  }
  .tab-button {
    background: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */
    display: flex;
    align-items: center;
    color: #D9D9D9;
  }
  .display {
    display: none;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px;
    width: 350px;
    background-color: #F5F5F5;
  }
  .file-input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 16px;
    gap: 8px;
    width: 310px;
    height: 34px;
    background: #26B0DC;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    border-radius: 2px;
    text-align: center;
  }
  .file-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  input[type="file"] {
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    opacity: 0;
  }
  label[for="file-input"] {
    color: white;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  label[for="file-input"] svg {
    margin-right: 3px;
  }
  #wrapper,
  .tabs {
    width: 374px;
  }
  #export-csv-btn,
  #export-geojson-btn {
    margin-top: 8px;
  }
  .tabs {
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .active-tab {
    color: #26B0DC;
    border-bottom: 1px solid #26B0DC;
    position: relative;
  }
  .active-tab+.display {
    display: block;
  }
  .tab-button.active-tab::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #26B0DC;
  }
  .tab-button path {
    stroke: #D9D9D9 !important;
  }
  .tab-button.active-tab path {
    stroke: #26B0DC !important;
  }
  /* css for 3d */
  p,
  h3,
  span,
  label {
    color: #bfbfbf;
  }
  label {
    position: relative;
  }
  #title {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    height: 21px;
    background: #171618;
    border-radius: 4px 4px 0px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    padding-left: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-top: 10px;
    cursor: pointer;
  }
  span#logo {
    position: relative;
    top: 2px;
    margin-right: 14px;
  }
  span#closed-logo svg {
    margin-top: 3px;
  }
  .group-title {
    width: calc(100% - 24px);
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 12px;
    margin-top: 12px;
  }
  .group-title p {
    margin: 1px 8px 0px 8px;
  }
  .input-title {
    display: block;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    padding: 8px 0px 8px 0px;
    width: 100px;
    margin: 0px;
    float: left;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  input[type="number"],
  input[type="text"],
  select {
    width: 70.5px;
    background: transparent;
    border: 1px solid #4a4a4a;
    height: 23px;
    color: #000;
    font-size: 12px;
    padding-left: 7px;
    float: right;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .filter-wrapper {
    height: auto;
    border: 1px solid #595959;
  }
  /* Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  *:focus {
    outline: none;
  }
  select {
    width: 47px;
    height: 27px;
    margin-left: 13px;
    margin-right: 8px;
  }
  .filter-item-wrapper span.filter-item-del-btn {
    margin-left: 4px;
  }
  .filter-item-operator {
    width: 45px;
  }
  .guide {
    display: block;
    width: 100%;
    font-size: 12px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    margin-bottom: 10px;
  }
  .blue-btn {
    text-align: center;
    color: #ffffff;
    background: #26B0DC;
    border: solid 1px #26B0DC;
    box-shadow: 0px 2px 0px rgb(0 0 0 / 2%);
    border-radius: 4px;
    padding: 7px;
    height: 30px;
    width: 100%;
    cursor: pointer;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    display: inline-block;
  }
  .separator {
    display: flex;
    align-items: center;
    margin-left: 12px;
    margin-right: 12px;
  }
  .separator .line {
    height: 1px;
    flex: 1;
    background-color: #4a4a4a;
  }
  .separator h2 {
    padding: 0 1px;
  }
  #btn-wrapper {
    margin-top: 10px;
  }
  .form-group {
    margin: 0;
    position: static;
    display: block;
    overflow: hidden;
  }
  span.maru {
    position: relative;
    left: 145px;
    top: 8px;
    font-size: 12px;
    color: #4a4a4a;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  span.arrow {
    position: relative;
    left: 190px;
    top: -25px;
    font-size: 20px;
    color: #4a4a4a;
  }
  select {
    appearance: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  #general .form-group {
    margin-bottom: 5px;
  }
  span#close:hover {
    cursor: pointer;
  }
  div.path-body {
    padding: 0px 8px;
  }
  .path-header {
    width: 100%;
    display: flex;
    justify-items: stretch;
    justify-content: space-between;
    border-bottom: 1px solid #595959;
    margin-bottom: 8px;
  }
  span.remove-path {
    margin-top: 6px;
    margin-right: 10px;
    cursor: pointer;
  }
  span.path-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 4px 2px;
    height: 22px;
    padding-left: 8px;
  }
  #close {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
    left: 152px;
    top: 0px;
    color: #595959;
  }
  #close::after,
  #close::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
  }
  #close::after {
    transform: rotate(-45deg);
  }
  .condition-wrapper span.down-ar {
    left: 41px;
  }
  span.down-ar {
    overflow: hidden;
    position: relative;
    top: 4px;
    left: 40px;
    height: 9px;
    width: 9px;
  }
  #closed-logo {
    display: none;
    overflow: hidden;
    width: 21px;
    height: 21px;
    cursor: pointer;
    margin-top: 11px;
    margin-left: 12px;
    background: #181618;
    padding: 5px;
    border-radius: 5px;
  }
  input[type="color"] {
    border: 1px solid #000;
    border-right: none;
    width: 27px;
    height: 27px;
    padding: 0px;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type="color"]::-webkit-color-swatch {
    border: none;
  }
  form#data-form {
    margin-left: 12px;
    margin-right: 12px;
  }
  .form-group-inline {
    overflow: hidden;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    display: flex;
    margin-left: 15px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 4px;
  }
  span.filter-item-del-btn {
    margin-left: 8px;
  }
  .filter-group {
    border-left: 1px solid #C7C5C5;
    margin-left: 15px;
    margin-bottom: 10px;
  }
  span.filter-label {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin: 8px;
    display: block;
  }
  .add-filter-item {
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-left: 15px;
    margin-top: 8px;
    cursor: pointer;
    color: #bfbfbf;
  }
  button#add-filter-group-btn {
    margin-left: 8px;
    margin-bottom: 8px;
    padding: 4px;
    width: 24px;
    height: 24px;
    background: #26B0DC;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  button#path-draw span {
    margin-right: 6px;
  }
  .double-btn-wrapper .blue-btn {
    width: calc(50% - 3px);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  .double-btn-wrapper .blue-btn:first-child {
    background-color: transparent;
    border: 1px solid #26B0DC;
    color: #26B0DC;
  }
  .double-btn-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }
  button#add-condition span {
    margin-right: 6px;
  }
  #export-style-btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  .filter-item-del-btn {
    cursor: pointer;
  }
  .condition-item-fs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .condition-item-sc {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .condition-item {
    padding: 8px;
    margin-bottom: 8px;
    background-color: #fff;
    display: none;
  }
  .condition-item .form-input {
    width: 105px;
  }
  span.if-span {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    margin-right: 2px;
    width: 22px;
  }
  input.condition-item-selected-color {
    width: 248px;
  }
  .condition-item-fs:first-child {
    margin-bottom: 8px;
  }
  .filter-group {
    display: none;
  }
  .filter-group-wrapper .filter-group {
    display: block;
  }
  .condition-wrapper .condition-item {
    display: block;
  }
  .filter-item-del-btn {
    cursor: pointer;
  }
  .filter-group-wrapper,
  .condition-wrapper {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 200px;
  }
  select#filter-item-combine-operator {
    width: 59px;
    text-align: left;
    padding-left: 8px;
    /* margin-left: -3px; */
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  .filter-item-combine-operator-wrapper {
    display: flex;
    margin-left: 7px;
    margin-bottom: 4px;
  }
  .filter-item-combine-operator-wrapper span.down-ar {
    left: 50px;
  }
  .filter-group-combine-operator-wrapper {
    display: flex;
    margin-bottom: 10px;
  }
  .filter-group-combine-operator {
    border: none;
    width: 56px;
    height: 29px;
    background: #26B0DC;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 8px;
    color: #ffffff;
  }
  .filter-group-combine-operator-wrapper span.down-ar {
    left: 49px;
  }
  .filter-item-combine-operator {
    width: 56px;
  }
  .filter-item-combine-operator-wrapper,
  .filter-group-combine-operator-wrapper {
    display: none;
  }
  #data-form .filter-item-combine-operator-wrapper,
  #data-form .filter-group-combine-operator-wrapper {
    display: flex;
  }
  .select2-selection__rendered {
    width: calc(100% - 18px);
    background: #181618 !important;
    border: 1px solid #4a4a4a;
    height: 25px;
    color: #c7c5c5 !important;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    margin-top: 1px;
    font-size: 10px !important;
    line-height: 16px;
    text-overflow: inherit;
    white-space: normal;
  }
  [title~=""] {
    font-size: 12px !important;
    width: calc(100% - 23px);
  }
  .select2-container--default {
    width: 65px !important;
  }
  .select2-selection__arrow {
    background: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 0.5L9.5 0.5L5 5.5L0.5 0.5Z' fill='%234A4A4A'/%3E%3C/svg%3E%0A") center / contain no-repeat;
    color: #c7c5c5;
  }
  .select2-results__option {
    text-align: left;
  }
  .select2-results__options,
  .select2-results__option {
    background: #181618 !important;
  }
  .select2-results__options {
    width: 64px;
    color: #c7c5c5 !important;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 8px !important;
    line-height: 16px;
    position: relative;
    align-items: center;
    border-top: 1px solid #4a4a4a;
  }
  .select2-results__option--highlighted {
    background: #3F3D45 !important;
    padding-left: 5px;
  }
  .select2-results__option .select2-results__option--highlighted {
    background: #181618 !important;
    width: 200px;
  }
  .select2-search,
  .select2-search--dropdown {
    display: block;
  }
  .select2-dropdown,
  .select2-dropdown--below {
    background: #181618 !important;
    margin-left: -5px;
    border-color: #3F3D45 !important;
    border-radius: 0;
    width: 66px !important;
  }
  .select2,
  .select2-container,
  .select2-container--custom-select {
    margin-left: 5px;
  }
  .select2-selection,
  .select2-selection--single {
    background: #181618 !important;
    border: none !important;
    flex-direction: row;
    display: flex;
    width: 83px !important;
  }
  .select2-container--default .select2-selection--single {
    background: #181618 !important;
    color: #c7c5c5 !important;
    border: none !important;
    width: 56px !important;
    border-radius: none !important;
  }
  .select2-container .select2-selection--single .select2-selection__rendered {
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    padding-left: 4px;
  }
  .select2-container--default .select2-results>.select2-results__options {
    overflow-x: hidden;
  }
  .select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 22px;
    position: absolute;
    top: 1px;
    left: 43px;
    width: 7px;
    z-index: 99;
    padding-top: 7px;
    margin-left: 8px;
  }
  .select2-container--default .select2-selection--single .select2-selection__arrow b {
    color: transparent;
    border-color: transparent !important;
  }
  .select2-results__message {
    border-top: 1px solid #4a4a4a;
    padding-left: 0px;
    margin: auto;
    text-align: center;
  }
  .filter-item-value {
    margin-left: 5px !important;
  }
  .condition-item-value {
    margin-left: 5px;
  }
  .group-div {
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding-bottom: 2px;
    padding-top: 12px;
    background-color: #fff;
  }
  .close-button {
    position: absolute;
    right: -6px;
    top: 7px;
    font-size: 20px;
    background: transparent;
    border: none;
    color: #000;
    cursor: pointer;
  }
  .icon {
    display: none;
    cursor: pointer;
  }
  .condition-item-operator,
  .condition-item-selected-color {
    color: #000;
  }
  /* end css for 3d */
</style>
<html>
<body>
  <div id="wrapper" class="wrapper">
    <button class="close-button">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" fill="#26B0DC" />
        <path d="M22.75 9.25L9.25 22.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M22.75 22.75L9.25 9.25" stroke="white" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </button>
    <div class="tabs">
      <button class="tab-button active-tab" id="tab-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 8.25V18.8333C21 19.0101 20.9298 19.1797 20.8047 19.3047C20.6797 19.4298 20.5101 19.5 20.3333 19.5H3.75C3.55109 19.5 3.36032 19.421 3.21967 19.2803C3.07902 19.1397 3 18.9489 3 18.75V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H8.75C8.91228 5.25 9.07018 5.30263 9.2 5.4L11.8 7.35C11.9298 7.44737 12.0877 7.5 12.25 7.5H20.25C20.4489 7.5 20.6397 7.57902 20.7803 7.71967C20.921 7.86032 21 8.05109 21 8.25Z"
            stroke="#26B0DC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ?????????</button>
      <button class="tab-button" id="tab-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.75 3H19.5C19.6989 3 19.8897 3.07902 20.0303 3.21967C20.171 3.36032 20.25 3.55109 20.25 3.75V13.5C20.25 13.6989 20.171 13.8897 20.0303 14.0303C19.8897 14.171 19.6989 14.25 19.5 14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V6C3.75 5.20435 4.06607 4.44129 4.62868 3.87868C5.19129 3.31607 5.95435 3 6.75 3V3Z"
            stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10.5 14.25L9.75 19.5C9.75 20.0967 9.98705 20.669 10.409 21.091C10.831 21.5129 11.4033 21.75 12 21.75C12.5967 21.75 13.169 21.5129 13.591 21.091C14.0129 20.669 14.25 20.0967 14.25 19.5L13.5 14.25"
            stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3.75 10.5H20.25" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M15.75 3V6.75" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ????????????</button>
    </div>
    <div class="display" id="display-1">
      <div class="file-input-container">
        <input type="file" id="file-input" class="file-input" accept=".csv">
        <label for="file-input">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
            <path d="M8.25 12H15.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 8.25V15.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          csv????????????????????????</label>
      </div>
      <div class="show" id="show"></div>
      <button type="button" class="blue-btn" id="export-csv-btn">
        ??????ID??????CSV?????????????????????
      </button>
      <button type="button" class="blue-btn" id="export-geojson-btn">
        ??????ID???????????????GeoJSON?????????????????????
      </button>
    </div>
    <div class="display" id="display-2">
      <!-- show 3d tiles input alike -->
      <form id="data-form">
        <div class="group-div">
          ??????????????????
        </div>
        <div class="condition-wrapper" id="condition-wrapper">
          <div class="condition-item" id="condition-item-0">
            <div class="condition-item-fs">
              <div class="form-group">
                <select class="condition-item-attr operator" name="condition-item[0][0][operator]"
                  id="condition-item-attr-0">
                  <option value="pop_sex_code_1">??????</option>
                  <option value="pop_sex_code_2">??????</option>
                  <option value="pop_age00">????????????????????????</option>
                  <option value="pop_age10">????????????:10-19???</option>
                  <option value="pop_age20">????????????:20-29???</option>
                  <option value="pop_age30">????????????:30-39???</option>
                  <option value="pop_age40">????????????:40-49???</option>
                  <option value="pop_age50">????????????:50???-</option>
                </select>
              </div>
              <div class="form-group">
                <select class="condition-item-operator operator" name="condition-item[0][0][operator]"
                  id="condition-item-operator-0">
                  <option value=">=">??????</option>
                  <option value="<=">
                    ?????? </option>
                  <option value="===">?????????</option>
                  <option value="!==">???????????????</option>
                  <option value=">">???????????????</option>
                  <option value="<">
                    ?????? </option>
                </select>
              </div>
              <input type="text" class="form-input condition-item-value" name="condition-item[0][0][value]"
                id="condition-item-value-0">
            </div>
            <div class="condition-item-sc">
              <input type="color" class="color condition-item-color-picker" value="#FFFFFF"
                id="condition-item-color-picker-0" name="condition-item[0][0][colorpicker]" />
              <input type="text" class="condition-item-selected-color" id="condition-item-selected-color-0"
                name="condition-item[0][0][selected-color]" value="#FFFFFF" />
              <span class="filter-item-del-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4998 3.5L2.49976 3.50001" stroke="#595959" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M6.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.5 6.5V10.5" stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5"
                    stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5"
                    stroke="#595959" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="double-btn-wrapper">
          <button type="button" class="blue-btn" id="remove-style-btn">
            ?????????????????????
          </button>
          <button type="button" class="blue-btn" id="apply-style-btn">
            ?????????????????????
          </button>
        </div>
        <button type="button" class="blue-btn" id="export-style-btn">
          ?????????????????????????????????????????????
        </button>
      </form>
      <!-- end show 3d tiles alike -->
    </div>
  </div>
  <div class="icon">
    <!-- Your icon content here -->
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="#26B0DC" />
      <path d="M22.75 9.25L9.25 22.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M22.75 22.75L9.25 9.25" stroke="white" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </div>
</body>
</html>
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://code.jquery.com/jquery-1.6.4.js"></script>
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script src="https://geolonia.github.io/spatial-id-request-sdk/spatial-id-request.js"></script>
<script src="https://storage.googleapis.com/spatial-id/scripts/csv-parse/umd/index.js"></script>
<script src="https://storage.googleapis.com/spatial-id/scripts/csv-stringify/umd/sync.js"></script>
<script>
  console.clear();
  let currentLayer
  let currentFeature
  let plateauFetching = false
  let fudosanFetching = false
  let currentSpace
  let spaceUrl
  window.addEventListener("message", function (e) {
    if (e.source !== parent) return;
    if (e.data.property) {
      property = e.data.property;
      spaceUrl = property?.default?.spaceUrl
    }
    if (e.data.type === "select") {
      const list = document.getElementById("show")
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
      const feature = e.data.feature
      if (!feature) return
      // const cloned = cloneLayer(e.data.layer)
      currentLayer = e.data.layer
      currentFeature = e.data.feature
      const space = new SpatialIdRequest.Space(feature.properties.id)
      showVoxelProperties(currentFeature) //show voxel data
      showAdditionalProperties(space)
      plateauFetching = true
      getPlateauData(space).then(d => {
        if (!d.length || plateauFetching) return
        showData([["PLATEAU", d]])
      }).finally(() => { plateauFetching = false })
      fudosanFetching = true
      getFudosanData(space).then(d => {
        if (!d.length || fudosanFetching) return
        showData([["???????????????", d]])
      }).finally(() => { fudosanFetching = false })
    }
  });
  function showData(data) {
    const list = document.getElementById('show');
    data.forEach((r, i) => {
      let rEle = document.createElement("div");
      rEle.className = "element";
      let btn = document.createElement("button");
      btn.className = "accordion";
      rEle.appendChild(btn);
      let spanBtn = document.createElement("span");
      spanBtn.className = "accordion-title";
      spanBtn.innerHTML = r[0] + "(" + r[1].length + ")";
      let spanIcon = document.createElement("span");
      spanIcon.className = "icon";
      spanIcon.setAttribute("aria-hidden", "true");
      btn.appendChild(spanBtn);
      btn.appendChild(spanIcon);
      let panel = document.createElement("div");
      panel.className = "panel";
      r[1].forEach((ele, index) => {
        let panelContentEle = document.createElement("div");
        panelContentEle.className = "element";
        let panelBtn = document.createElement("button");
        panelBtn.className = "accordion content";
        let spanPanel = document.createElement("span");
        spanPanel.className = "accordion-title";
        spanPanel.innerHTML = Object.values(ele)[0];
        let panelIcon = document.createElement("icon");
        panelIcon.className = "icon";
        panelIcon.setAttribute("aria-hidden", "true");
        panelBtn.appendChild(spanPanel);
        panelBtn.appendChild(panelIcon);
        let panelDetail = document.createElement("div");
        panelDetail.className = "panel";
        let panelContenDetail = document.createElement("div");
        panelContenDetail.className = "panent-content";
        let table = document.createElement("table");
        Object.keys(ele).forEach((key) => {
          let row = document.createElement("tr");
          let col1 = document.createElement("td");
          col1.innerHTML = key;
          let col2 = document.createElement("td");
          col2.innerHTML = ele[key];
          table.appendChild(row);
          table.appendChild(col1);
          table.appendChild(col2);
          panelDetail.appendChild(table);
        })
        panelContentEle.appendChild(panelBtn)
        panelContentEle.appendChild(panelDetail)
        panel.appendChild(panelContentEle);
        attachAccordionEvent(panelBtn)
      })
      rEle.appendChild(panel);
      list.prepend(rEle);
      attachAccordionEvent(btn)
    })
  }
  function attachAccordionEvent(elem) {
    elem.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
      let activeClass = document.querySelector(".active");
      if (!activeClass) {
        expanded = false;
      } else {
        expanded = true;
      }
      updateIframeSize()
    })
  }
  const tabButtons = document.querySelectorAll('.tab-button');
  const displays = document.querySelectorAll('.display');
  // Show the content of Tab 1 by default
  document.querySelector('#display-1').style.display = 'block';
  tabButtons.forEach(tab => {
    tab.addEventListener('click', () => {
      // remove active class from all tabs
      tabButtons.forEach(tb => tb.classList.remove('active-tab'));
      // add active class to clicked tab
      tab.classList.add('active-tab');
      // show data of the clicked tab and hide other tab
      const displayId = tab.id.replace('tab-', 'display-');
      displays.forEach(display => {
        if (display.id === displayId) {
          display.style.display = 'block';
        } else {
          display.style.display = 'none';
        }
      });
    });
  });
  // add active class to the first tab button by default
  tabButtons[0].classList.add('active-tab');
  const wrapper = document.querySelector('.wrapper');
  const closeButton = document.querySelector('.close-button');
  const icon = document.querySelector('.icon');
  closeButton.addEventListener('click', () => {
    wrapper.style.display = 'none';
    icon.style.display = 'block';
  });
  icon.addEventListener('click', () => {
    wrapper.style.display = 'block';
    icon.style.display = 'none';
  });
  // CSV???????????????????????????Object?????????????????????
  // process CSV
  const LAT_JA = "??????"
  const LNG_JA = "??????"
  const ALT_JA = "??????"
  const convertLatLng = (records) => {
    if (!records.length) return
    const convertedRecords = records.map(r => {
      const { ??????, ??????, ??????, ...rest } = r
      if (!(?????? && ??????)) return r
      return {
        lat: r[LAT_JA],
        lng: r[LNG_JA],
        alt: ALT_JA in r && r[ALT_JA],
        ...rest
      }
    })
    return convertedRecords
  }
  function spatialIdnize(obj) {
    if (!obj.hasOwnProperty("lat") || !obj.hasOwnProperty("lng")) return
    const { lat, lng, alt, ...rest } = obj
    const space = getSpatialIdByLatLngAlt(lat, lng, alt ?? 0)
    return {
      id: space.id,
      ...rest
    }
  }
  function spatialIdnizeList(objects) {
    return objects.map(o => spatialIdnize(o))
  }
  function processCSV(csvStr, callback) {
    let records
    csv_parse.parse(csvStr, {
      comment: "#",
      columns: true,
      delimiter: ","
    }, (err, rs) => {
      if (err) throw new Error("failed to process csv")
      const convertedRecords = convertLatLng(rs)
      const spatialIdRecords = spatialIdnizeList(convertedRecords ?? [])
      records = spatialIdRecords
      callback?.(records)
    })
  }
  let records = {} //??????CSV???????????????records?????????????????????????????? e.g. {hinansho: []}
  const csvBtn = document.getElementById("file-input");
  $('input[type=file]').change(function () {
    const input = csvBtn.files[0];
    const fileName = input.name;
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text, (res) => {
        records[fileName] = res
      })
      // The document.write method will overwrite the entire document, including the closing </body> and </html> tags, causing all elements on the page to be removed.
      // document.write(JSON.stringify(array));
    };
    reader.readAsText(input);
  });
  function getPropertyBySpatialId(records, id) {
    const keys = Object.keys(records)
    let newRecords = {}
    keys.forEach(k => {
      const filteredProps = records[k].filter(d => {
        return d.id === id
      })
      newRecords[k] = filteredProps
    })
    return newRecords
  }
  // lat, lng, alt -> Space
  function getSpatialIdByLatLngAlt(lat, lng, alt) {
    return new SpatialIdRequest.Space({ lng: lng, lat: lat, alt: alt }, 16)
  }
  function showAdditionalProperties(space) {
    const spaceProperties = getPropertyBySpatialId(records, space.id)
    const propertiesEntries = Object.entries(spaceProperties)
    showData(propertiesEntries)
  }
  function showVoxelProperties(feature) {
    if (!feature) return
    const properties = feature.properties
    showData([["Voxel???????????????", [properties]]])
  }
  function highlightSelectedVoxel(space) {
  }
  function replaceLayer(layer) { //pass new layer
    parent.postMessage({ type: "layer.replace", layer }, "*");
  }
  // space -> [{...props}]
  async function getPlateauData(space) {
    const res = await SpatialIdRequest.queryVectorTile(
      { "url": "https://tileserver.dejicho-chosa.geolonia-dev.click/services/plateau_minato_ku?key=YOUR-API-KEY" }, space).catch(e => console.error(e));
    const records = res.features.map(f => f.properties)
    return records
  }
  async function getFudosanData(space) {
    const res = await SpatialIdRequest.queryVectorTile(
      { "url": "https://tileserver.dejicho-chosa.geolonia-dev.click/services/fudosan_data?key=YOUR-API-KEY" }, space).catch(e => console.error(e));
    const records = res.features.map(f => f.properties)
    return records
  }
  // <!-- This function is used to update the iframe size. -->
  let expanded = false;
  function updateIframeSize() {
    let newWrapperElm = document.getElementById("wrapper");
    let heightWp = newWrapperElm.offsetHeight;
    parent.postMessage({ type: "resize", expanded: true, heightWp }, "*");
  }
  // Handle to get color hex from color picker
  function displayColorHex() {
    let colorPickers = document.querySelectorAll(
      ".condition-item-color-picker"
    );
    colorPickers.forEach(function (colorPicker, ind) {
      colorPicker.addEventListener("change", function (event) {
        event.preventDefault();
        colorPicker.parentNode
          .querySelector(".condition-item-selected-color")
          .value = event.target.value;
      });
    });
  }
  function displayColorFromHex() {
    let colorPickers = document.querySelectorAll(
      ".condition-item-selected-color"
    );
    colorPickers.forEach(function (colorPicker, ind) {
      colorPicker.addEventListener("change", function (event) {
        event.preventDefault();
        colorPicker.parentNode
          .querySelector(".condition-item-color-picker")
          .value = event.target.value;
      });
    });
  }
  const frm = document.getElementById("data-form");
  const removeStyleBtn = document.getElementById("remove-style-btn");
  removeStyleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //clear form
    frm.reset(); // Reset all form data
    return false; // Prevent page refresh
  });
  const applyBtn = document.getElementById("apply-style-btn");
  applyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("apply btn clicked");
    const conditions = buildStyleCondition()
    const styleObj = buildStyleObj()
    const styleJsonStr = styleObjToDataURL(styleObj)
    parent.postMessage({ type: "layer.stylefile", styleJson: styleJsonStr, layerId: currentLayer.id }, "*");
  });
  function buildStyleCondition() {
    const colorCondition = getColorCondition()
    return [colorCondition]
  }
  function styleObjToDataURL(obj) {
    const dataUrl = "data:application/json;charset=utf8," + encodeURIComponent(JSON.stringify(obj))
    return dataUrl
  }
  function buildStyleObj() {
    const styleObj = { color: { conditions: [] } }
    const colorCondition = getColorCondition()
    styleObj.color.conditions.push(colorCondition)
    const defaultCondition = ["true", "color('#E8F1F2', 0.6)"]
    return styleObj
  }
  function getColorCondition() {
    const attr = document.getElementById("condition-item-attr-0").value
    const operator = document.getElementById("condition-item-operator-0").value
    const value = document.getElementById("condition-item-value-0").value
    const color = document.getElementById("condition-item-color-picker-0").value
    if (!attr || !operator || !value || !color) return
    return ["\${" + attr + "}" + " " + operator + " " + value, "color('" + color + "', 0.6)"]
  }
  const getDataInput = () => {
    const conditionInput = document.getElementById("condition-item-attr-0").value
    const operatorInput = document.getElementById("condition-item-operator-0").value
    const valueInput = document.getElementById("condition-item-value-0").value
    const colorInput = document.getElementById("condition-item-selected-color-0").value
    return {
      condition: conditionInput,
      operator: operatorInput || ">=",
      value: valueInput || 0,
      color: colorInput || "#ffffff"
    }
  }
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  const handleDataJson = (obj) => {
    //return styleData
    if (obj.condition.includes(":") || obj.condition.includes("#") || obj.condition.includes("_")) {
      obj.condition = "feature['" + obj.condition + "']"
    }
    if (!Object.values(obj)) {
      return {
        "show": "true",
        "color": {
          "conditions": [
            [
              "true",
              "color('#FFFFFF')"
            ]
          ]
        }
      }
    }
    else {
      if (isNumeric(obj.value)) {
        return {
          "show": "true",
          "color": {
            "conditions": [[
              "$" +
              "{" +
              obj.condition +
              "}" +
              obj.operator +
              "" +
              obj.value,
              "color('" + obj.color + "')",
            ]]
          }
        }
      } else {
        return {
          "show": "true",
          "color": {
            "conditions": [[
              "$" +
              "{" +
              obj.condition +
              "}" +
              obj.operator + "'" +
              "" +
              obj.value + "'",
              "color('" + obj.color + "')",
            ]]
          }
        }
      }
    }
  }
  //download plugin input data as json file
  function downloadObjectAsJson(exportObj, exportName) {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  const exportBtn = document.getElementById("export-style-btn");
  exportBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const data = getDataInput();
    //download style file json
    const styleData = handleDataJson(data)
    downloadObjectAsJson(styleData, "download");
  });

  function strToBlob(csvStr, type) {
    return new Blob([csvStr], { type })
  }
  function downloadCSV() {
    const [filename, csvStr] = recordsToCSV()
    const blob = strToBlob(csvStr, "text/csv")
    const url = (window.URL || window.webkitURL).createObjectURL(blob)
    const download = document.createElement("a")
    download.href = url
    download.download = filename
    download.click()
      (window.URL || window.webkitURL).revokeObjectURL(url)
  }
  async function downloadGeoJSON() {
    const jsonStr = JSON.stringify(await joinUserDataWSpatialId(records))
    const blob = strToBlob(jsonStr, "application/json")
    const url = (window.URL || window.webkitURL).createObjectURL(blob)
    const download = document.createElement("a")
    download.href = url
    download.download = "joined"
    download.click()
      (window.URL || window.webkitURL).revokeObjectURL(url)
  }
  function recordsToCSV() {
    const fileNames = Object.keys(records)
    if (!fileNames.length) return
    return [fileNames[0], objectToCSV(records[fileNames[0]])] //?????????????????????????????????????????????????????????????????????????????????????????????????????????
  }
  function objectToCSV(obj) {
    return csv_stringify_sync.stringify(obj, { header: true })
  }
  const csvExportBtn = document.getElementById("export-csv-btn");
  csvExportBtn.addEventListener("click", function (e) {
    e.preventDefault();
    downloadCSV()
  })
  const geojsonExportBtn = document.getElementById("export-geojson-btn")
  geojsonExportBtn.addEventListener("click", async function (e) {
    e.preventDefault()
    await downloadGeoJSON()
  })
  async function joinUserDataWSpatialId(userData) {
    const res = await fetch("https://asset.cms.test.reearth.dev/assets/8a/c97a31-84b6-4d2d-8886-467732ca67c7/data_population_16.geojson").catch(e => console.error(e))
    const geojson = await res.json()
    const userDataEntries = Object.entries(userData)
    geojson.features.forEach(f => {
      if (!f) return
      const id = f.properties.id
      let additionalProperties = {}
      userDataEntries.forEach(d => {
        const key = d[0]
        const val = d[1].filter(r => r.id === id)
        additionalProperties[key] = val
      })
      f.properties = { ...f.properties, ...additionalProperties }
    })
    return geojson
  }
  const populationMap = {
    "pop_sex_code_1": "??????",
    "pop_sex_code_2": "??????",
    "pop_age00": "????????????????????????",
    "pop_age10": "????????????:10-19???",
    "pop_age20": "????????????:20-29???",
    "pop_age30": "????????????:30-39???",
    "pop_age40": "????????????:40-49???",
    "pop_age50": "????????????:50???-"
  }
  displayColorHex();
  displayColorFromHex()
</script>
`,
  { width: 382, height: 264 }
);

reearth.on("update", send);
send();

reearth.on("message", (msg) => {
  // resize
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      382,
      msg.heightWp,
      msg.expanded ? undefined : false
    );
  }

  // replace layer
  if (msg.type === "layer.replace") {
    const layer = msg.layer
    if (!layer) return

    const newLayer = {
      type: layer.type,
      data: {
        type: layer.data.type,
        url: layer.data.url
      },
      ["3dtiles"]: {
        color: {
          expression: 'true ? color("blue") : color("pink")'
          // expression: layer["3dtiles"]?.color?.expression
        }
      }
    }
    reearth.layers.delete(id)
    reearth.layers.add(newLayer)
  }

  if (msg.type === "layer.stylefile") {
    reearth.layers.overrideProperty(msg.layerId, {
      default: {
        styleUrl: msg.styleJson
      }
    })
  }
});



reearth.on("select", (layerId) => {
  if (!layerId) return
  const layer = reearth.layers.findById(layerId)
  if (!layer) return
  reearth.ui.postMessage({
    type: "select",
    layer: layer,
    feature: reearth.layers.selectedFeature,
  })
})

function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property,
  });
}


function cloneLayer(layer) {
  const newLayer = {
    id: layer.id,
    type: layer.type,
    data: {
      type: layer.data?.type,
      url: layer.data?.url
    },
    ["3dtiles"]: {
      color: {
        expression: layer["3dtiles"]?.color.expression
      }
    }
  }
  return newLayer
}


// const id = reearth.layers.add({
//   type: "simple",
//   data: {
//     type: "3dtiles",
//     url: "https://asset.cms.test.reearth.dev/assets/a8/4d461b-0dad-4d37-8df0-488e78226563/minato-z16-pop/tileset.json",
//   },
//   "3dtiles": {
//     color: {
//       // expression: '${pop_sex_code_1} > 1000?color("blue"):color("red")'
//     }
//   }
// });
// console.log("id--", id)
reearth.camera.flyTo({ lng: 139.753985797606674, lat: 35.6306738560138, height: 1000 })