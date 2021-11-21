
import makeElement from "../utils/makeElement";
import header from "../components/ui/header";
import link from "../components/ui/link";
import tagline from "../components/ui/tagline";
import 'animate.css';

const home = function(){

    const page = document.createElement('header');
    page.classList.add('home-header');
    page.classList.add('center-in-page');

    page.append(header('Paperclip'));
    page.append(tagline('Listen better. Plan better. Build better.', 'animate__animated animate__fadeInUp'))
    page.append(link("<img src=\"https://img.icons8.com/plasticine/100/000000/circled-play.png\"/>", "/todos", "btn btn--stripe"))
    
    
    return page
}

export default home

{/* <img src=\"https://img.icons8.com/plasticine/100/000000/circled-play.png\"/> */}