import {getStore, updateStore} from './store'
/* 
       Reducer works on the store
       action: what do you want to do on the store
            action.type = "edit"
              action.type = "delete"
                action.type = "create"
           delete: remove a employee
           edit: edits an existing employee
           add: add a new employee
       payload data for that action object
          {object}

*/


function reducers (action){
    const store = getStore();       
    
    let newStore = null;

    switch(action.type){
        case "edit": return "edit employee";
        case "delete": 
            const index = action.payload.index; 
            newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb( ) 
            return "remove item";
        case "add": 
            const newItem = action.payload.newItem;
            newStore = [newItem, ...store];
            updateStore(newStore);
            action.cb();
            return "create a new item";
        default: return store;
    }

}


export default reducers