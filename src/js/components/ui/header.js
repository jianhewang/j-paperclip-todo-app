import makeElement from "../../utils/makeElement";
import logo from "../icons/logo";

const header = function (label="ui heading one", className="ui-h1"){
     const template = `<h1 class="${className}"> ${logo()} <span>${label}<span> </h1>`;

     const element = makeElement(template);

     return element
     
}

export default header