import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss';

function form ({id, category, title, isComplete, startDate, startTime, endDate, endTime} = {id:'', category:'', title:'', isComplete:'', startDate:'', startTime:'', endDate:'', endTime:''}){

    const template = `
    <form method="post" class=${styles.form} id="form">
        <input type="text" name="id" value="${id}"/>

        <label>Description</label>
        <input type="text" name="description" value="${title}" id="description">

        <label for="category">Category</label>
        <select name="category" id="category">
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="friends">Friends</option>
            <option value="home">Home</option>
            <option value="expense">Expense</option>
        </select>

        <label for="status">Complete</label>
        <input type="checkbox" name="status" id="status">

        <label for="startdate">Start Date</label>
        <input type="date" name="startdate" id="startDate" value="${startDate}">

        <label for="enddate">End Date</label>
        <input type="date" name="enddate" id="endDate" value="${endDate}">

        <label for="starttime">Start Time</label>
        <input type="time" name="starttime" id="startTime" value="${startTime}">

        <label for="endtime">End Time</label>
        <input type="time" name="endtime" id="endTime" value="${endTime}">

        <button id="cancel">Cancel</button>
        <button type="submit" id="save">Save</button>
    </form>
    `;
    const elem = makeElement(template);

    elem.querySelector('#category').value = category;
    elem.querySelector('#status').checked = isComplete;

    return elem

}

export default form