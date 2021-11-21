import makeElement from "../../utils/makeElement"

const toDoList = function (){
    const template = `
    <aside id="todoList" class="todoList">
        <ul id="todoItems" class="todoItems">
        
        </ul>
        
    </aside>
    `

    return makeElement(template)
}

export default toDoList

