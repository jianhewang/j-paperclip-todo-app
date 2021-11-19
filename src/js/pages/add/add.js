
import form from "../../components/ui/form/form";
import { Router } from "../../routes/router";
import { v4 as uuidv4} from 'uuid';
import reducers from "../../redux/reducers";


function addPage(){

    function onCancelAdd(e){
        Router('/todos');
    }

    function onAddNewItem(e){
        e.preventDefault();
        
        const newId = uuidv4().substr(0, 8);
        const addForm = document.querySelector('#form');
        
        const newItem = {
            id: newId,
            category: addForm.elements['category'].value,
            title: addForm.elements['description'].value,
            isComplete: addForm.elements['status'].checked,
            startDate: addForm.elements['startdate'].value,
            startTime: addForm.elements['starttime'].value,
            endDate: addForm.elements['enddate'].value,
            endTime: addForm.elements['endtime'].value
        }

        console.log(newItem);
        const action = {
            type: "add",
            payload: {newItem},
            cb: () => Router('/todos')
        }
        reducers(action);

    }

    const page = document.createElement('div');

    

    page.append(form())

    page.querySelector('#cancel').addEventListener('click', onCancelAdd);
    page.querySelector('#save').addEventListener('click', onAddNewItem);

    return page
}

export default addPage