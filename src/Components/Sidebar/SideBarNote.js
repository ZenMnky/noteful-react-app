import React, {Component} from 'react';
import {Consumer} from '../Context';

class SideBarNote extends Component{
    render(){
        return(
        
            <Consumer>
                {({notes, folders}) => {
                    //grab the noteid passed through the path
                    let {noteid} = this.props.match.params;
                    //find the corresponding note object
                    let selectedNote = notes.find(note => note.id === noteid )
                    //grab the folder information from the note object
                    let noteFolderId = selectedNote.folderId;
                    //use the folderId to find the name of the folder
                    let selectedFolder = folders.find(folder => folder.id === noteFolderId)

                    return(
                        <div>
                            <h2>{selectedFolder.name}</h2>
                            <input 
                                type="button" 
                                value="Go Back" 
                                onClick={() => this.props.history.push('/') } />
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default SideBarNote;