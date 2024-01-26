function changeEditorBackgroundColor(value) {
    document.getElementById('editor-content').style.backgroundColor = value;
}

function execCommand(command, value = null) {
    document.execCommand(command, false, value);
}

function insertBorder() {
    let element = getSelection().baseNode;
    element = element.parentElement;
    if (element.style.border) {
        element.style.border = '1px solid black';
    } else {
        element.style.border = '';
    }
}

function insertFakeParagraph() {
    execCommand('insertHTML', `&nbsp;&nbsp;&nbsp;`);
}

function insertHTML() {
    const html = prompt("Insert the HTML code:");
    execCommand('insertHTML', `${html}`);
}

function insertImageFromLink() {
    const linkUrl = prompt("URL:");
    if (![null, ''].includes(linkUrl)) {
        const otherAttribs = prompt("Attributes on DOM (title, alt, width or simply let empty):");
        execCommand('insertHTML', `<img src='${linkUrl}' ${otherAttribs.toString()}>`);
    } else {
        return false;
    }
}

function insertLink() {
    const linkText = prompt("Link name (external text on link):");
    if (linkText !== null) {
        const linkUrl = prompt("URL:");
        if (linkUrl !== null) {
            execCommand('insertHTML', `<a href="${linkUrl}">${linkText}</a>`);
        }
    }
}

function returnHTML(htmlElement, saveOuterHTMLAsEditable = false) {
    let res = null;
    if (saveOuterHTMLAsEditable) {
        res = htmlElement.outerHTML;
    } else {
        res = htmlElement.outerHTML.replace('contenteditable', 'notEditable');
    }
    console.log(res);
    return res;
}
