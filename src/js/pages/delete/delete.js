import makeElement from "../../utils/makeElement";
import button from "../../components/ui/button/button";
import { Router } from "../../routes/router";
import { getStore } from "../../redux/store";
import reducers from "../../redux/reducers";
import brandingHeader from "../../components/ui/brandheader";
import toDoItem from "../../components/cards/todoitem";

const cancelButton = button("Cancel", "cancel")
const deleteButton = button("Delete", "delete", "delete")

function deletePage (props){
    // Component Clean Up Function
    // Remove The Listeners from the Page
    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete);  
        deleteButton.removeEventListener('click', onRemoveItem); 
    }
    
    //Cancel Delete Event Handler
    // Call the cleanUp method
    function onCancelDelete (e){
        cleanUp();
        Router('/todos');
    }
    
    function onRemoveItem(e){

        if (props !== null){
            Router('/todos');
            const index = getStore().findIndex((item) => {
                return (item.id === props.id);
            })
    
            const action = {
                type:"delete",
                payload:{index},
                cb:()=> Router('/todos')
            }
    
            reducers(action);
            cleanUp();
        }
    }
console.log(props);
    const page = document.createElement('aside');
    page.classList.add('center-in-page');
    page.append(brandingHeader());
    
    const header = `
    <h2 class="crud-header">Delete Item</h2>
    `;
    page.append(makeElement(header));

    cancelButton.addEventListener('click', onCancelDelete); 
    deleteButton.addEventListener('click', onRemoveItem);

    page.append(toDoItem(props, false));

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-layout');
    page.append(buttonContainer);
    buttonContainer.append(cancelButton, deleteButton);
    return page;
}

export default deletePage