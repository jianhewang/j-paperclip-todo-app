import makeElement from "../../../utils/makeElement";

const button = function (text){
    const temp = `
        <button>
            ${text}
        </button>
    `;

    const button = makeElement(temp);

    return button
}

export default button