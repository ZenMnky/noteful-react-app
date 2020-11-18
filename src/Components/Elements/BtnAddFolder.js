import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
class AddFolderButton extends Component{
    render(){
        return(
            <button 
                type="button"
                onClick={() => { this.props.history.push('/AddFolder') }}
            >
                Add Folder
            </button>
        
        )
    }
    
}

AddFolderButton.propTypes = {
    history: PropTypes.object.isRequired
}


export default withRouter(AddFolderButton)