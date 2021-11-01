
// import directory from "../pages/directory"; 
// import home from "../pages/index";
import home from "../pages/home";
import toDoPage from "../pages/toDoPage";
import notFound from "../pages/notFound";

/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/

const routes = {
    "/": home,
    "/todos": toDoPage,
    "/error": notFound
}

const Router =  function (pathname)   {
   
     // check the pathname agains the router object
     // if path is valid display the component page
     // if not display the not found page.
    const isValidateRoute = Object.keys(routes).find(key => key === pathname)

    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if (isValidateRoute === undefined){
        app.appendChild(notFound())
    }
    else{
        // we need to add the () in the end of routes to call the page
        app.appendChild(routes[window.location.pathname]())
    }   
}



 
export { Router}