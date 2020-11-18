import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
class AddNoteButton extends Component{
    render(){
        return(
            <button 
                type="button"
                onClick={() => { this.props.history.push('/AddNote') }}
            >
                Add Note
            </button>
        
        )
    }
    
}

AddNoteButton.propTypes = {
    history: PropTypes.object.isRequired
}


export default withRouter(AddNoteButton)