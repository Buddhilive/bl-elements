const $_styleContainer = document.createElement('style');

$_styleContainer.innerHTML = `
body {
    font-family: sans-serif;
    margin: 0;
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

bl-button a {
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
  
  bl-button a:hover {
    background: #4d5ec1;
  }

  bl-button a {
      text-decoration: none;
      font-size: 14px
  }
  
  bl-editor button {
      background: #ccc;
      border: none;
      padding: 0.2rem;
      border-radius: 5px;
      cursor: pointer;
  }

  bl-editor button:hover {
    background: #039be5;
  }

  bl-editor .tool--on {
    background: #039be5;
  }

  .material-icons {
      font-size: 18px;
  }

  .bl--editor {
    border: 1px solid #039be5;
    margin-top: 13px;
    border-radius: 5px;
    padding: 12px;
    height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
    overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.bl--editor:focus {
    outline: none;
}

.bl--editor img {
    display: block;
    margin: auto;
    width: 50%;
    height: auto;
}

.bl--editor-tools {
    padding: 5px 5px 5px 5px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    background: #dfdfdf;
}

.bl--toolbar-seperator {
    border-right: 1px solid #444;
    margin-right: 4px;
    margin-left: 4px;
    padding-top: 1rem;
    display: inline-flex;
}

.bl--toolbar-label {
    background: #dfdfdf;
}

.bl--toolbar-label:hover {
    background: #dfdfdf;
}

.bl--post-title-input {
    border: 3px solid #dfdfdf;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 12px;
    width: 98.5%;
    height: 1rem;
}

.bl--post-title-input:focus {
    outline:none;
}

.bl--image-uploader-overlay{
    background:rgba(0,0,0,.4);
    cursor:pointer;
    display:none;
    height:100%;
    position:fixed;
    text-align:center;
    top:0;
    width:100%;
    z-index:10000;
}

.bl--image-uploader-popup {
    background: #fff;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 1rem;
    border-radius: 10px;
}

.bl--image-uploader-preview {
    display: block;
    margin: 12px auto;
}

.bl--upload-file {
    display: block;
    margin: 10px auto;
}

#bl--cancel-btn a {
    background: #dfdfdf;
    color: #000;
}

  }
`;

document.head.appendChild($_styleContainer);