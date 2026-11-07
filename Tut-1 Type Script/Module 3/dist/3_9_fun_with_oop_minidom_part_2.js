class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" />`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const chidrenHTMl = this.children.map((child) => child.render()).join("\n");
        console.log(chidrenHTMl);
        return `<form id="${this.id}">\n${chidrenHTMl}\n</form>`;
    }
}
const emailInput = new Input("email", "email", "Enter Youre Email");
const passInput = new Input("pass", "password", "Enter Youre Password");
const submitButton = new Button("submit-btn", "Submit");
const formElement = new Form("form");
console.log(emailInput.render());
console.log(passInput.render());
console.log(submitButton.render());
console.log(formElement);
// Add children to the form
formElement.appendChild(emailInput);
formElement.appendChild(passInput);
formElement.appendChild(submitButton);
let rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
