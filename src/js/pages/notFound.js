
import link from "./../components/ui/link";
import brandingHeader from "../components/ui/brandheader";
import errorMessage from "../components/ui/notfoundpage/errorMessage";

const notFound = function(){
    const page = document.querySelector('#app');

    page.append(brandingHeader());
    page.append(errorMessage());
    page.querySelector('div.page-not-found').append(link("Return to Home Page", "/"));

    return page
}

export default notFound