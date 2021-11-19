import makeElement from "../../../utils/makeElement"
import * as styles from './styles.module.scss';

function form ({id, category, description, status, startDate, startTime, endDate, endTime} = {id:'', category:'', description:'', status:'', startDate:'', startTime:'', endDate:'', endTime:''}){

    const template = `
    <form method="post" class=${styles.form} id="form">
        <input type="text" name="id" />

        <label>Description</label>
        <input type="text" name="description" value="${description}" id="">

        <label for="category">Category</label>
        <select name="category" id="">
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="friends">Friends</option>
            <option value="home">Home</option>
            <option value="expense">Expense</option>
        </select>

        <label for="status">Complete</label>
        <input type="checkbox" name="status">

        <label for="startdate">Start Date</label>
        <input type="date" name="startdate" id="">

        <label for="enddate">End Date</label>
        <input type="date" name="enddate" id="">

        <label for="starttime">Start Time</label>
        <input type="time" name="starttime" id="">

        <label for="endtime">End Time</label>
        <input type="time" name="endtime" id="">

        <button id="cancel">Cancel</button>
        <button type="submit" id="save">Save</button>
    </form>
    `
    const elem = makeElement(template)

    return elem

}

export default form