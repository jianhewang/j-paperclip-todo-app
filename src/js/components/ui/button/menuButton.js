import makeElement from "../../../utils/makeElement";

const menuButton = function (){
    const button = `
        <button id="status">
        <img src="https://img.icons8.com/plasticine/40/000000/menu-2.png"/>
        <span></span>
        </button>
    `;

    const element = makeElement(button)

    return element
}

export default menuButton