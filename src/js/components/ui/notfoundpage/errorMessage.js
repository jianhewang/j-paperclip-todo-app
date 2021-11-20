import makeElement from "../../../utils/makeElement";

const errorMessage = function(){
    const template = `
        <div class="page-not-found center-in-page">
            <p>
                <span>404</span> 
                <img src="https://img.icons8.com/plasticine/100/000000/crying-baby.png"/>
            </p>
            <p>Page not found</p>
        </div>
    `;

    return makeElement(template)
}

export default errorMessage