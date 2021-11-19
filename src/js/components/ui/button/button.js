import makeElement from "../../../utils/makeElement";

const button = function (text, id){
    const temp = `
        <button id="${id}">
            ${text}
        </button>
    `;

    const button = makeElement(temp);

    return button
}

export default button