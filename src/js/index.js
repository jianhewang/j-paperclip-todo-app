import {Router} from "./routes/router";
import { createStore} from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from './utils/key'


const app = document.querySelector("#app");
// app.classList.add("center-in-page");

const onAppInit = async function(e){

    let toDoItems = await dataFetcher("./data/todos.json")

    if(toDoItems[0].id === ""){
        toDoItems = [...keyGenerator(toDoItems)]
    }

    createStore(toDoItems)
    
    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)

 




 
 

 