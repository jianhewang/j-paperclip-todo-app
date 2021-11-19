
import brandingHeader from "../components/ui/brandheader";
import toDoList from "../components/cards/todolist";
import {getStore} from "../redux/store";
import toDoItem from "../components/cards/todoitem";
import addToDo from "../components/ui/addToDo";
import { Router } from "../routes/router";

const toDoPage = function(){
    
    const page = document.querySelector('#app');

    page.append(brandingHeader());

    const todoList = getStore();
    // just a container for our data
    const appContainer = toDoList();

    // event handler function to delete todo item
    function onDeleteItem (e){
        e.preventDefault();
        //console.log(e.currentTarget.parentElement.parentElement.dataset.key);
        
        // passing the unique id 
        const ItemId = {id:e.currentTarget.parentElement.parentElement.dataset.key}
        Router('/delete', ItemId);
    }

    // assume data is not null
    if (todoList !== null){
        const list = appContainer.querySelector('ul');
        const elem = todoList.map(item => toDoItem(item))
        elem.forEach(element => {
            element.querySelector('#delete').addEventListener('click', onDeleteItem);
            list.append(element);
        });
        page.append(appContainer);
    }
    
    page.append(addToDo());
    
    return page;
}

export default toDoPage
