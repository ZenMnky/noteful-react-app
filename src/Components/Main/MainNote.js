import React, {Component} from 'react';
import {Consumer} from '../Context'
import moment from 'moment';
import PropTypes from 'prop-types';

class MainNote extends Component{
    render(){
        return(
            <Consumer>
                {({notes, handleDeleteNote, deleteNoteRequest}) => {
                    let {noteid} = this.props.match.params;
                    let selectedNote = notes.find(note => note.id === noteid);

                    let {
                        name,
                        modified,
                        content,
                        id
                    } = selectedNote;


                    return(
                        <section>
                            <div className="noteListItem" >
                                <h2>{name}</h2>
                                <p>Last modified: { moment({modified}).calendar() }</p>
                                <input onClick={() => {
                                    deleteNoteRequest(id, handleDeleteNote)
                                    this.props.history.push('/');
                                }} type='button' value='Delete Note' />
                            </div>
                            <div className="noteListItem-content">
                                <p>{content}</p>
                            </div>
                        </section>
                    );
                }}
            </Consumer>
            
        )
    }
}

MainNote.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default MainNote;