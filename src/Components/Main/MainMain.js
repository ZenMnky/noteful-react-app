import React, {Component} from 'react';
import {Consumer} from '../Context'
import { Link } from 'react-router-dom';
import moment from 'moment';
import cuid from 'cuid';
import AddNoteBtn from '../Elements/BtnAddNote';

class MainMain extends Component{
    render(){
        return(
            <Consumer>
                { ({notes,handleDeleteNote, deleteNoteRequest}) => {
                    let noteList = notes.map(note => {
                        let {id, name, modified} = note;
                        return(
                            <div key={cuid()} className="noteListItem" >
                                <Link  to={`/note/${id}`}><h2>{name}</h2></Link>
                                <p>Last modified: { moment(modified).calendar() }</p>
                                <input onClick={() => {
                                    deleteNoteRequest(id, handleDeleteNote)
                                }} type='button' value='Delete Note' />
                            </div>
                        );
                    })
                    return(
                        <div key={cuid()}>
                            {noteList}
                            {/* <input type="button" value="Add Note" /> */}
                            <AddNoteBtn />
                        </div>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default MainMain;