import makeElement from "../../utils/makeElement";
import button from "../../components/ui/button/button";
import { Router } from "../../routes/router";
import { getStore } from "../../redux/store";
import reducers from "../../redux/reducers";

const cancelButton = button("cancel")
const deleteButton = button("delete")


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
        const index = getStore().findIndex((item) => {
            return (item.id === props.id);
        })

        const action = {
            type:"delete",
            payload:{index},
            cb:()=> Router('/todos')
        }

        reducers(action);
    }
    console.log(props);

    const page = document.querySelector('#app');
    cancelButton.addEventListener('click', onCancelDelete); 
    deleteButton.addEventListener('click', onRemoveItem);
    page.append(cancelButton, deleteButton);
    return page;
}

export default deletePage