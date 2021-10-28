import makeElement from "../../utils/makeElement";
import addButton from "./button/appBar";

const addToDo = function(){

    // create the template
    const template = `
    <div class="footer">
        ${addButton()}
    </div>
    `;
    
    const element = makeElement(template);

    return element
}

export default addToDo