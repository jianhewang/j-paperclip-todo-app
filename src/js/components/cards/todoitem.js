import makeElement from "../../utils/makeElement";
import editButton from "../ui/button/editButton";
import deleteButton from "../ui/button/deleteButton";
import editItem from "../../pages/edit";
import switchButton from "../ui/button/switchButton";
import menuButton from "../ui/button/menuButton";

const toDoItem = function ({id, category, title, isComplete, startDate, startTime, endDate, endTime} = {id:'', category:'', title:'', isComplete:'', startDate:'', startTime:'', endDate:'', endTime:''}, buttonOn=true) {
    const status = isComplete === true ? "Complete" : "Pending";

    let categoryImg;
    switch(category){
        case "social":
            categoryImg = `
            <img src="https://img.icons8.com/plasticine/100/000000/crowd.png"/>
            `;
            // bubble
            break;
        case "work":
            categoryImg = `
            <img src="https://img.icons8.com/plasticine/100/000000/office.png"/>
            `;
            // sticker
            break;
        case "home":
            categoryImg = `
            <img src="https://img.icons8.com/plasticine/100/000000/home.png"/>
            `;
            // doodle
            break;
        case "school":
            categoryImg = `
            <img src="https://img.icons8.com/plasticine/100/000000/book-and-pencil.png"/>
            `;
            // cloud
            break;
        case "expense":
            categoryImg =  `
            
            <img src="https://img.icons8.com/plasticine/100/000000/cost.png"/>
            `
            //hand drawn
            break;
    }


    const template = `       
        <li class="todoItem" data-key="${id}">
            <p>${categoryImg}</p>
            <div>
                <p> ${title} </p>
                <p>Start: ${startDate} ${startTime}</p>
                <p><span>End: </span>${endDate} ${endTime}</p>
                <p>${status}</p>
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
        //buttonContainer.append(menuButton())
      buttonContainer.append(editButton());
      buttonContainer.append(deleteButton());
      buttonContainer.append(switchButton());
    }
    
    const setting = item.querySelector('.controls img');
    setting.addEventListener('click', function(e){
        e.target.parentElement.querySelector('.buttons').style.display = 'inline-block';
    })

    buttonContainer.querySelector('img').addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })

    return item;
  };

  
  
  export default toDoItem;




//   switch(category){
//     case "friends":
//         categorySvg = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//         </svg>
//         `;
//         break;
//     case "work":
//         categorySvg = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
//           <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
//         </svg>
//         `;
//         break;
//     case "home":
//         categorySvg = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//         </svg>
//         `;
//         break;
//     case "school":
//         categorySvg = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
//         </svg>
//         `;
//         break;
//     case "expense":
//         categorySvg =  `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
//           <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
//         </svg>
//         `
//         break;
// }