import { LitElement, html, css } from "lit-element";
import { bleditor_style } from "./bl-editor-style";
import '../bl-select/bl-select';

class BlEditor extends LitElement {

    static get properties() {
        return {
            blpopup: { attribute: 'bl-popup' },
        }
    }

    /* static get styles() {
        return bleditor_style;
    } */

    constructor() {
        super();

        this.blpopup = "";

        //onspot editor
        /* this.bltitle = 'Button';
        if (this.addEventListener) {
            this.addEventListener('contextmenu', function(e) {
                alert("You've tried to open context menu");
                e.preventDefault();
            }, false);
        } else {
            this.attachEvent('oncontextmenu', function() {
                alert("You've tried to open context menu");
                window.event.returnValue = false;
            });
        } */
    }

    render() {
        return html `
        <div class="bl--post-title">
            <input type="text" class="bl--post-title-input" placeholder="Post Title">
        <div>
        <div class="bl--editor-tools">
        <button class="material-icons bl--bold-button" @click="${this.formatBold}">format_bold</button>
        <button class="material-icons bl--italic-button" @click="${this.formatItalic}">format_italic</button>
        <button class="material-icons bl--underline-button" @click="${this.formatUnderline}">format_underline</button>
        <button class="material-icons bl--strikethrough-button" @click="${this.formatStrikethrough}">strikethrough_s</button>
        <button class="material-icons bl--align-left-button" @click="${this.formatAlignLeft}">format_align_left</button>
        <button class="material-icons bl--align-right-button" @click="${this.formatAlignRight}">format_align_right</button>
        <button class="material-icons bl--align-center-button" @click="${this.formatAlignCenter}">format_align_center</button>
        <button class="material-icons bl--align-justify-button" @click="${this.formatAlignJustify}">format_align_justify</button>
        <button class="material-icons bl--list-bullet-button" @click="${this.formatListBullet}">format_list_bulleted</button>
        <button class="material-icons bl--list-number-button" @click="${this.formatListNumber}">format_list_numbered</button>
        <span class="bl--toolbar-seperator"></span>
        <button class="material-icons bl--toolbar-label">title</button>
        <button class="material-icons bl--title-button" @click="${(e) =>this.formatTitle(1)}">filter_1</button>
        <button class="material-icons bl--title-button" @click="${(e) =>this.formatTitle(2)}">filter_2</button>
        <button class="material-icons bl--title-button" @click="${(e) =>this.formatTitle(3)}">filter_3</button>
        <button class="material-icons bl--title-button" @click="${(e) =>this.formatTitle(4)}">filter_4</button>
        <button class="material-icons bl--title-button" @click="${(e) =>this.formatTitle(5)}">filter_5</button>
        <button class="material-icons bl--title-button" @click="${(e) =>this.formatTitle(6)}">filter_6</button> 
        <span class="bl--toolbar-seperator"></span>
        <button class="material-icons bl--insert-link-button" @click="${this.insertLink}">insert_link</button>
        <button class="material-icons bl--insert-photo-button" @click="${this.inserPhoto}">insert_photo</button>

    </div>
    <div class="center">
        <div class="bl--editor" contenteditable>
        </div>
    </div>
        `;
    }

    formatBold() {
        document.querySelector('.bl--bold-button').blur();
        /* if (window.getSelection().type == 'Caret') {
            this.editorFocus();
            document.querySelector('.bl--bold-button').classList.toggle('tool--on');
        } */
        document.execCommand('bold', false, '');
    }

    formatItalic() {
        document.querySelector('.bl--italic-button').blur();
        document.execCommand('italic', false, '');
    }

    formatUnderline() {
        document.querySelector('.bl--underline-button').blur();
        document.execCommand('underline', false, '');
    }

    formatStrikethrough() {
        document.querySelector('.bl--strikethrough-button').blur();
        document.execCommand('strikethrough', false, '');
    }

    formatAlignLeft() {
        document.querySelector('.bl--align-left-button').blur();
        document.execCommand('justifyLeft', false, '');
    }

    formatAlignRight() {
        document.querySelector('.bl--align-right-button').blur();
        document.execCommand('justifyRight', false, '');
    }

    formatAlignCenter() {
        document.querySelector('.bl--align-center-button').blur();
        document.execCommand('justifyCenter', false, '');
    }

    formatAlignJustify() {
        document.querySelector('.bl--align-justify-button').blur();
        document.execCommand('justifyFull', false, '');
    }

    formatListBullet() {
        document.querySelector('.bl--list-bullet-button').blur();
        document.execCommand('insertUnorderedList', false, '');
    }

    formatListNumber() {
        document.querySelector('.bl--list-number-button').blur();
        document.execCommand('insertOrderedList', false, '');
    }

    formatTitle(heading) {
        document.querySelector('.bl--title-button').blur();
        document.execCommand('formatBlock', false, '<h' + heading + '>');
    }

    insertLink() {
        var url = prompt("Enter the URL");
        document.execCommand("createLink", false, url);
    }

    inserPhoto() {
        document.querySelector('.bl--editor').focus();
        /* var url = prompt("Enter the URL");
        document.execCommand("insertImage", false, url); */
        if (this.blpopup === "") {
            var blWindow = window.open("");
            blWindow.document.write("<p>This Option is not Configured</p>");
        } else {
            var blWindow = window.open(this.blpopup);
            console.log(blWindow.document);
            /* blWindow.document.querySelector('.bl-get-image-url').onclick = () => {
                var imgUrl = blWindow.document.querySelector('.bl-image-url-holder').innerHTML;
                document.execCommand("insertImage", false, imgUrl);
                console.log("success");
            }; */
        }
    }

    insertPhotoFromURL(imageURL) {
        document.querySelector('.bl--editor').focus();
        document.execCommand("insertImage", false, imageURL);
    }

    getEditorData() {
        const postTitle = this.querySelector('.bl--post-title-input').value;
        const postContent = this.querySelector('.bl--editor').innerHTML;
        const postData = {
            title: postTitle,
            content: postContent
        }
        return postData;
        //console.log(postData);
    }

    editorFocus() {
        var editor = document.querySelector('.bl--editor'),
            blselctor = window.getSelection(),
            blrange = document.createRange(),
            rangeCount = editor.childElementCount + 2;
        blrange.setStart(editor, rangeCount);
        blrange.setEnd(editor, rangeCount);
        blselctor.removeAllRanges();
        blselctor.addRange(blrange);
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('bl-editor', BlEditor);