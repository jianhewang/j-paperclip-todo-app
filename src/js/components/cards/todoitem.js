import makeElement from "../../utils/makeElement";
import editButton from "../ui/button/editButton";
import deleteButton from "../ui/button/deleteButton";
import switchButton from "../ui/button/switchButton";


const toDoItem = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime} = {id:'', category:'', title:'', isComplete:'', startDate:'', startTime:'', endDate:'', endTime:''}, buttonOn=true) {
    const status = isComplete? "completed" : "in progress";
    const statusClass = isComplete? "done" : "";

    let categoryImg;
    switch(category){
        case "social":
            categoryImg = `
            
            <img src="https://img.icons8.com/bubbles/100/000000/crowd--v1.png"/>
            `;
            break;
        case "work":
            categoryImg = `
            <img src="https://img.icons8.com/bubbles/100/000000/office.png"/>
            `;
            break;
        case "home":
            categoryImg = `
            <img src="https://img.icons8.com/bubbles/100/000000/cottage.png"/>
            
            `;
            break;
        case "school":
            categoryImg = `
            <img src="https://img.icons8.com/bubbles/100/000000/book-and-pencil.png"/>
            
            `;
            break;
        case "expense":
            categoryImg =  `
            <img src="https://img.icons8.com/bubbles/100/000000/wallet.png"/>
            
            `
            break;
    }


    const template = `       
        <li class="todoItem" data-key="${id}">
            <p>${categoryImg}</p>
            <div>
                <p> ${title} </p>
                <p>Start: <span class="date">${dateFormat(startDate)}</span> <span class="time">${startTime}</span></p>
                <p><span class="end-date">End: </span><span class="date">${dateFormat(endDate)}</span> <span class="time">${endTime}</span></p>
                <p class="${statusClass}">${status}</p>
            </div>
            <div class="controls">
                
                <img src="https://img.icons8.com/plasticine/40/000000/menu-2.png"/>
                
                <div class="buttons">
                <img src="https://img.icons8.com/plasticine/40/000000/delete-sign.png"/>
                </div>
            </div>
        </li>
      `;
      
    const item = makeElement(template);
    const buttonContainer = item.querySelector('.buttons');
    if (buttonOn){
        buttonContainer.append(switchButton(id));
        buttonContainer.append(deleteButton(id));
        buttonContainer.append(editButton(id));
        settings();
    }
    else{
        buttonContainer.parentElement.querySelector('img').style.visibility = "hidden";
    }
    
    function settings(){   
        const setting = item.querySelector('.controls img');
        setting.addEventListener('click', function(e){
            e.target.parentElement.querySelector('.buttons').classList.add('settings');
        })
    
        buttonContainer.querySelector('img').addEventListener('click', function(e){
            e.target.parentElement.classList.remove('settings');
        })
    }

    function dateFormat(itemDate){
        const months = ["Jan ","Feb ","Mar ","Apr ","May ","Jun ","Jul ","Aug ","Sep ","Oct ","Nov ","Dec "];
        const date = new Date(itemDate);
        const month = months[date.getMonth()];
        const day = date.getDate() + 1;
        return (month + ' ' + day);
    }

    return item;
  };

  
  
  export default toDoItem;