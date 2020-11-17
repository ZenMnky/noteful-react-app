import React, {Component} from 'react';
import {Consumer} from '../Context';
import moment from 'moment';
import {Link} from 'react-router-dom';
class MainFolder extends Component{
    render(){
        return(
            <Consumer>
                {context => {
                    //do stuff
                    let {folderid} = this.props.match.params;
                    let folderNotes = context.notes.filter(note => note.folderId === folderid);
                    let noteItems = folderNotes.map(note => {
                        return(
                            <div className="noteListItem" >
                                <Link to={`/note/${note.id}`}><h2>{note.name}</h2></Link>
                                <p>Last modified: { moment(note.modified).calendar() }</p>
                                <input onClick={() => {
                                    context.deleteNoteRequest(note.id, context.handleDeleteNote)
                                }}
                                type='button' value='Delete Note' />
                            </div>
                        )});

                    return (
                        <div>
                            {noteItems}
                        </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default MainFolder;