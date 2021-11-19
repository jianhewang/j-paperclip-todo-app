
import brandingHeader from "../components/ui/brandheader";
import toDoList from "../components/cards/todolist";
import {getStore} from "../redux/store";
import toDoItem from "../components/cards/todoitem";
import addToDo from "../components/ui/addToDo";
import { Router } from "../routes/router";

const toDoPage = function(){
    
    const page = document.createElement('div');

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
        const selectedItem = todoList.find((item) => item.id === ItemId.id)
        Router('/delete', selectedItem);
    }

    function onAddItem(e){
        Router('/add');
    }

    function onEditItem(e){
        const ItemId = {id:e.currentTarget.parentElement.parentElement.dataset.key}
        const selectedItem = todoList.find((item) => item.id === ItemId.id)
        Router('/edit', selectedItem);
    }

    // assume data is not null
    if (todoList !== null){
        const list = appContainer.querySelector('ul');
        const elem = todoList.map(item => toDoItem(item))
        elem.forEach(element => {
            element.querySelector('#delete').addEventListener('click', onDeleteItem);
            element.querySelector('#edit').addEventListener('click', onEditItem);
            list.append(element);
        });
        page.append(appContainer);
    }

    page.append(addToDo());
    page.querySelector('#add').addEventListener('click', onAddItem)
    
    return page;
}

export default toDoPage
