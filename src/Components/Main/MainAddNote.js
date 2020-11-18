import React, {Component} from 'react';
import AddNoteForm from '../AddNoteForm/AddNoteForm';

class MainAddNote extends Component{
    render(){
        return(
            <div>
                <h2>Add Note</h2>
                <br />
                <AddNoteForm />
            </div>
        )
    }
}

export default MainAddNote;