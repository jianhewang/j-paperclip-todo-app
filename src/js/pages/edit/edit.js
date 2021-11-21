import form from "../../components/ui/form/form";
import { Router } from "../../routes/router";
import reducers from "../../redux/reducers";
import { getStore } from "../../redux/store";
import brandingHeader from "../../components/ui/brandheader";
import makeElement from "../../utils/makeElement";

function editPage(props){
    console.log(getStore());

    function cleanUp(){
        page.querySelector('#cancel').removeEventListener('click', onCancelEdit);
        page.querySelector('#save').removeEventListener('submit', onEditItem);
    }

    function onCancelEdit(e){
        cleanUp();
        Router('/todos');
    }

    function onEditItem(e){
        e.preventDefault();

        const editForm = document.querySelector('#form');
        
        if (props != null){

            const editItem = {
                id: editForm.elements['id'].value,
                category: editForm.elements['category'].value,
                title: editForm.elements['description'].value,
                isComplete: editForm.elements['status'].checked,
                startDate: editForm.elements['startdate'].value,
                startTime: editForm.elements['starttime'].value,
                endDate: editForm.elements['enddate'].value,
                endTime: editForm.elements['endtime'].value
            }
    
            const index = getStore().findIndex((item) => {
                return (item.id === editItem.id);
            })

            console.log(editItem);
            console.log(index);

            const action = {
                type: "edit",
                payload: { index, editItem },
                cb: () => Router('/todos')
            }
            reducers(action);
            cleanUp();
        }

    }

    const page = document.createElement('div');
    const header = `
    <h2 class="crud-header">Edit Item</h2>
    `;
    page.append(brandingHeader());
    page.append(makeElement(header));
    page.append(form(props))

    page.querySelector('#cancel').addEventListener('click', onCancelEdit);
    page.querySelector('#save').addEventListener('click', onEditItem);

    return page;
}

export default editPage