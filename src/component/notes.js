

import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../Actions/action'

class notes extends React.Component{

    state={
        input:'',
        edit:false,
        id:''
    }

   onChangeHandler =(event) =>{
        console.log(event.target.value);
        this.setState({
            input:event.target.value
        })

    }

    onEdit =(id)=>{
        let newedit=!this.state.edit;
        this.setState({
            edit:newedit,
            id:id
        })

}

    render(){

let cssClass= this.state.edit ? "btn btn-warning" : "btn btn-success";
        return(
        <div className="conatiner">
            <div className=" row p-2 border border-success justify-content-center">
                <div className="form-row">
                    <div className="col-8 form-group">
                        <input  value={this.state.input} onChange={(event)=>this.onChangeHandler(event)} type="text" className="form-control"/>
                    </div>
                    <div className=" col-2 form-group">
                        <button type="button" onClick={ !this.state.edit ? ()=>this.props.addNote(this.state.input) : ()=>{ this.props.updateNote(this.state.id,this.state.input); this.onEdit(0);}  } className={cssClass}>Save</button>
                    </div>
                </div>
            </div>

                <div className="row p-2 justify-content-center">
                <ul className="list-group">
                   {this.props.notes.map((note,index) =>{
                       return(<li key={note.id} className="list-group-item">
                           <div className="row">
                               <div className="col">
                                   {note.value}
                               </div>
                               <div className="col">
                                   <span  onClick={()=>this.props.deleteNote(index)} className="fa fa-trash text-white bg-danger p-3 ml-3"> </span>
                               </div>

                               <div className="col">
                                   <span  onClick={()=>this.onEdit(note.id)} className="fa fa-edit text-white color-white bg-success p-3 ml-3"> </span>
                               </div>


                           </div>
                       </li>)

                   })}
                </ul>
                </div>



        </div>
        )
    }
}

 let mapStateToProps = (state) =>{
  return{
    notes:state.notes
  };

  }

 let mapDispatchtoProps =dispatch =>{
    return{
        addNote    : (value)    =>   dispatch({type:actions.ADD_NOTE , value:value}),
        deleteNote : (id)       =>   dispatch({type:actions.DELETE_NOTE,   id:id}),
        updateNote : (id,value) =>   dispatch({type:actions.UPDATE_NOTE , id:id, value:value})
    };
  }


export default connect(mapStateToProps,mapDispatchtoProps)(notes);
