import {getStore, updateStore} from './store';

function reducers (action){
    const store = getStore();       
    const index = action.payload.index; 
    let newStore = null;

    switch(action.type){
        case "edit": 
            const editItem = action.payload.editItem;
            newStore = [...store.slice(0, index), Object.assign({}, store[index], editItem) , ...store.slice(index + 1)];
            updateStore(newStore);
            action.cb();
            return "edit item";
        case "delete": 
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