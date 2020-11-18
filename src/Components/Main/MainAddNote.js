import React, {Component} from 'react';
import AddNoteForm from '../AddNoteForm/AddNoteForm';

class MainAddNote extends Component{
    render(){
        return(
            <div>
                <h1>MainAddNote</h1>
                <AddNoteForm />
            </div>
        )
    }
}

export default MainAddNote;