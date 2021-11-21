import makeElement from "../../../utils/makeElement";

const button = function (text = '', id = '', className = ''){
    const temp = `
        <button id="${id}" class="${className}">
            ${text}
        </button>
    `;

    const button = makeElement(temp);

    return button
}

export default button