import React, {Component} from 'react';
import {Consumer} from '../Context'
import { Link } from 'react-router-dom';
import moment from 'moment';

class MainMain extends Component{
    render(){
        return(
            <Consumer>
                { ({notes,handleDeleteNote, deleteNoteRequest}) => {
                    let noteList = notes.map(note => {
                        let {id, name, modified} = note;
                        return(
                            <div className="noteListItem" >
                                <Link to={`/note/${id}`}><h2>{name}</h2></Link>
                                <p>Last modified: { moment(modified).calendar() }</p>
                                <input onClick={() => {
                                    deleteNoteRequest(id, handleDeleteNote)
                                }} type='button' value='Delete Note' />
                            </div>
                        );
                    })
                    return(
                        <div>
                            {noteList}
                            <input type="button" value="Add Note" />
                        </div>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default MainMain;