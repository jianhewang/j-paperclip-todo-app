import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss';

function form ({id, category, title, isComplete, startDate, startTime, endDate, endTime} = {id:'', category:'', title:'', isComplete:'', startDate:'', startTime:'', endDate:'', endTime:''}){

    let actionButton, actionButtonId;
    if (id === ''){
        actionButton = 'Add';
        actionButtonId = 'add';
    }
    else{
        actionButton = 'Edit';
        actionButtonId = 'edit';
    }

    const template = `
    <form method="post" class=${styles.form} id="form">
        <input type="hidden" name="id" value="${id}"/>

        <div>
            <div class="${styles.title}"">
            <label>Description</label>
            <input type="text" name="description" value="${title}" id="description">
            </div>
        </div>

        <div>
            <div class="${styles.category}">
                <label for="category">Category</label>
                <select name="category" id="category">
                    <option value="">Select Category</option>
                    <option value="expense">Expense</option>
                    <option value="home">Home</option>
                    <option value="school">School</option>
                    <option value="social">Social</option>
                    <option value="work">Work</option>
                </select>
            </div>
            
            <div class="${styles.status}">
                <p>Completed</p>
                <label for="status" class="${styles.switch}">
                    <input type="checkbox" name="status" id="status"/>
                    <span></span>
                </label>
            </div>

        </div>

        <div class="${styles.datetime}">
            <div>
                <label for="startdate">Start Date</label>
                <input type="date" name="startdate" id="startDate" value="${startDate}">
            </div>
            
            <div>
                <label for="starttime">Start Time</label>
                <input type="time" name="starttime" id="startTime" value="${startTime}">
            </div>
        </div>

        <div class="${styles.datetime}"> 
            <div>
                <label for="enddate">End Date</label>
                <input type="date" name="enddate" id="endDate" value="${endDate}">
            </div>
        
            <div>
                <label for="endtime">End Time</label>
                <input type="time" name="endtime" id="endTime" value="${endTime}">
            </div>
        </div>

        <div class="${styles.controls}">
            <button id="cancel">Cancel</button>
            <button type="submit" id="save">Save</button>
        </div>

    </form>
    `;
    const elem = makeElement(template);

    elem.querySelector('#category').value = category;
    elem.querySelector('#status').checked = isComplete;

    return elem

}

export default form


{/* <div class="${styles.status}">
                <label for="status">Completed</label>
                <input type="checkbox" name="status" id="status">
            </div> */}