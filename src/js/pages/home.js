
import makeElement from "../utils/makeElement";
import header from "../components/ui/header";
import link from "../components/ui/link";
import tagline from "../components/ui/tagline";

const home = function(){

    const page = document.createElement('header');
    page.classList.add('home-header');
    page.classList.add('center-in-page');

    page.append(header('J\'s Paperclip'));
    page.append(tagline('Listen better. Plan better. Build better.'))
    page.append(link("To Do App", "/todos"))
    
    return page
}

export default home