
import brandingHeader from "../components/ui/brandheader";
import toDoList from "../components/cards/todolist";
import {getStore} from "../redux/store";
import toDoItem from "../components/cards/todoitem";
import addToDo from "../components/ui/addToDo";

const toDoPage = function(){
    
    const page = document.querySelector('#app');

    page.append(brandingHeader());

    const todoList = getStore();
    // just a container for our data
    const appContainer = toDoList();

    // assume data is not null
    if (todoList !== null){
        const list = appContainer.querySelector('ul');
        const elem = todoList.map(item => toDoItem(item))
        elem.forEach(element => {
            list.append(element);
        });
        page.append(appContainer);
    }
    
    page.append(addToDo());
    
    return page;
}

export default toDoPage