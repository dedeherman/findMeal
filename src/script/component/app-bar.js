class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                padding: 20px;
                width: 100%;
                background-color: #ed4545;
                color: #e4f1f2;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                text-align: center;
                height: 50px;
                font-size: 25px;
            }        
        </style>
        <h2>Find Meal</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);
