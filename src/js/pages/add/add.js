
import form from "../../components/ui/form/form";
import { Router } from "../../routes/router";
import { v4 as uuidv4} from 'uuid';
import reducers from "../../redux/reducers";
import brandingHeader from "../../components/ui/brandheader";
import makeElement from "../../utils/makeElement";


function addPage(){

    function cleanUp(){
        page.querySelector('#cancel').removeEventListener('click', onCancelAdd);
        page.querySelector('#form').removeEventListener('submit', onAddNewItem);
    }

    function onCancelAdd(e){
        cleanUp();
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

        const action = {
            type: "add",
            payload: {newItem},
            cb: () => Router('/todos')
        }
        reducers(action);
        cleanUp();
    }

    const page = document.createElement('div');
    const header = `
    <h2 class="crud-header">Add New Item</h2>
    `;
    page.append(brandingHeader());
    page.append(makeElement(header));
    page.append(form())

    page.querySelector('#cancel').addEventListener('click', onCancelAdd);
    page.querySelector('#form').addEventListener('submit', onAddNewItem);

    return page
}

export default addPage