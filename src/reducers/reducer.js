
import * as actions from '../Actions/action'


const InitialState={
    notes :[]
}

  let addNote =(state,action)=>{

    return{
        ...state,
        notes :state.notes.concat({id:new Date(),value:action.value})
    }
  }


let deleteNote =(state,action)=>{
    let newnotes=[...state.notes];
    newnotes.splice(action.id,1);
    return{
        ...state,
        notes :newnotes
    }
}


let updateNote =(state,action)=>{

    console.log('action value: '+action.value);
let newNote=state.notes.map((item,index) =>{

    if(item.id === action.id) {
        console.log('found');
        return {id:new Date(),value:action.value};

    }
    else
        return item;
});

console.log(newNote);
    return{
        ...state,
        notes :newNote
    }


}



const Reducer = (state=InitialState,action) =>{

        switch(action.type)
       {
            case actions.ADD_NOTE:
                return addNote(state,action);
                break;

            case actions.DELETE_NOTE:
                return deleteNote(state,action);
                break;

            case actions.UPDATE_NOTE:
                return updateNote(state,action);
                break;

       }

       return state;

}

export  default Reducer;