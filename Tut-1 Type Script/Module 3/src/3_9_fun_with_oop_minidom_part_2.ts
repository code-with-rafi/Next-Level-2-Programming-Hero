
abstract class UIElement {
    constructor(
        protected id : string
    ){}

    abstract render():string;
}

class Input extends UIElement{
    constructor(
        id : string,
        private type : string,
        private placeholder : string
    ){
        super(id);
    }
    render(){
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" />`;
    }
}

class Button extends UIElement{
    constructor(
        id:string,
        private label : string
    ){
        super(id);
    }
    render(){
        return `<button id="${this.id}">${this.label}</button>`;
    }
}

class Form extends UIElement{
    private children : UIElement[] = [];
    appendChild(child:UIElement){
        this.children.push(child);
    }
    render(){
        const chidrenHTMl = this.children.map((child)=>child.render()).join("\n");
        console.log(chidrenHTMl);
        return `<form id="${this.id}">\n${chidrenHTMl}\n</form>`;
    }
}

const emailInput = new Input("email","email","Enter Youre Email");
const passInput = new Input("pass","password","Enter Youre Password");
const submitButton = new Button("submit-btn","Submit");
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
if(rootElement){
    rootElement.innerHTML = formElement.render();
}