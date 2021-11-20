import makeElement from "../../../utils/makeElement";

const editButton = function (){
    const button = `
        <button id="edit">
        <img src="https://img.icons8.com/officel/16/000000/pencil-tip.png"/>
        <span>Edit</span>
        </button>
    `;

    const element = makeElement(button)

    return element
}

export default editButton