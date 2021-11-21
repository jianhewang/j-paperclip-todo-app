import makeElement from "../../../utils/makeElement";

const switchButton = function (id=''){
    const button = `
        <button id="status" data-key="${id}">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="100px" height="100px"><path fill="#a1d3a2" d="M50 15A35 35 0 1 0 50 85A35 35 0 1 0 50 15Z"/><path fill="#fefdef" d="M47.5,61.5c-0.481,0-0.964-0.173-1.346-0.521l-12-12c-0.817-0.742-0.877-2.008-0.134-2.825c0.743-0.815,2.007-0.878,2.825-0.134l10.628,10.753l17.653-17.728c0.802-0.758,2.067-0.724,2.827,0.081c0.759,0.803,0.723,2.068-0.081,2.827l-19,19C48.488,61.317,47.994,61.5,47.5,61.5z"/><path fill="#1f212b" d="M47.5,62c-0.624,0-1.222-0.231-1.683-0.651L33.801,49.333c-0.477-0.432-0.767-1.047-0.798-1.714c-0.031-0.667,0.198-1.307,0.647-1.801c0.93-1.019,2.514-1.092,3.531-0.167l10.293,10.413l17.298-17.371C65.27,38.224,65.92,37.997,66.57,38c0.668,0.019,1.288,0.297,1.747,0.783c0.459,0.485,0.701,1.12,0.682,1.788c-0.019,0.667-0.297,1.288-0.783,1.747l-18.989,18.99C48.75,61.758,48.141,62,47.5,62z M35.509,45.999c-0.409,0-0.82,0.165-1.119,0.493c-0.269,0.296-0.407,0.68-0.388,1.08s0.192,0.769,0.488,1.038l12.018,12.017c0.526,0.477,1.469,0.484,2.022-0.036l18.989-18.99c0.302-0.285,0.469-0.657,0.48-1.058c0.011-0.4-0.134-0.781-0.409-1.072c-0.275-0.292-0.648-0.458-1.049-0.47c-0.392-0.019-0.78,0.133-1.071,0.409L47.828,57.126c-0.094,0.094-0.222,0.147-0.354,0.147h-0.001c-0.133,0-0.261-0.054-0.354-0.148L36.49,46.372C36.215,46.123,35.863,45.999,35.509,45.999z"/><path fill="#1f212b" d="M50,86c-19.851,0-36-16.149-36-36s16.149-36,36-36s36,16.149,36,36S69.851,86,50,86z M50,16c-18.748,0-34,15.252-34,34s15.252,34,34,34s34-15.252,34-34S68.748,16,50,16z"/><path fill="#1f212b" d="M65.5 24.227c-.087 0-.175-.022-.255-.07-.638-.377-1.299-.735-1.967-1.065-.247-.123-.349-.422-.227-.67.122-.249.424-.347.67-.227.689.341 1.374.711 2.033 1.102.237.141.316.447.176.685C65.837 24.139 65.671 24.227 65.5 24.227zM68.5 26.25c-.106 0-.213-.034-.304-.103-.322-.247-.65-.486-.983-.72-.226-.159-.281-.47-.122-.696.158-.228.469-.28.696-.123.345.241.683.49 1.017.745.22.167.261.481.094.701C68.799 26.182 68.65 26.25 68.5 26.25z"/><path fill="#1f212b" d="M50,81c-17.094,0-31-13.907-31-31s13.906-31,31-31c3.668,0,7.259,0.635,10.672,1.886c0.26,0.095,0.393,0.382,0.298,0.642s-0.384,0.393-0.642,0.297C57.025,20.614,53.551,20,50,20c-16.542,0-30,13.458-30,30s13.458,30,30,30s30-13.458,30-30c0-8.439-3.585-16.535-9.836-22.213c-0.205-0.186-0.22-0.502-0.034-0.707c0.187-0.204,0.502-0.219,0.706-0.034C77.296,32.914,81,41.28,81,50C81,67.093,67.094,81,50,81z"/></svg>
        <span>Done</span>
        </button>
    `;

    const element = makeElement(button)

    return element
}

export default switchButton