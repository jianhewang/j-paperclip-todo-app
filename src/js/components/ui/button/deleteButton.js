import makeElement from "../../../utils/makeElement";

const deleteButton = function (){
    const button = `
        <button id="delete">
        <img src="https://img.icons8.com/officel/16/000000/delete-sign.png"/>
            <span>Delete</span>
        </button>
    `;

    const element = makeElement(button)

    return element
}

export default deleteButton