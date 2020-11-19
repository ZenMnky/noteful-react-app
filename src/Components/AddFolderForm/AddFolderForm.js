import React, { Component } from 'react';
import { Consumer, NotefulContext } from '../Context'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class AddFolderForm extends Component {
    static contextType = NotefulContext;
    
    state = {
        folderName: {
            value: '',
            touched: false //for form validation later
        }
    }

    /*=============================================
    =            form state-update handlers            =
    =============================================*/
    updateName(name){
        this.setState({folderName: {value: name, touched: true}})
    }
    
    /*=====  End of form state-update handlers  ======*/

    
    /*=============================================
    =            form validation methods            =
    =============================================*/
    validateName(){
        const name = this.state.folderName.value.trim();
        if (name.length === 0){
            return 'Name is required'
        } else if (name.length < 3){
            return 'Name must be at least 3 characters long';
        }
    }
    
    /*=====  End of form validation methods  ======*/
    
    
    
    handleSubmit = (event) => {    
        event.preventDefault();

        //post to API and to Store
        this.context.addFolderRequest(this.state.folderName.value, this.context.addFolder)
        //rediret to home
        this.props.history.push('/');
    }
    
    

    render(){
        return(
            <Consumer>
                {(context) => {
                    return(
                        <form 
                            id="addFolderForm"
                            onSubmit={event => this.handleSubmit(event)}
                        >
                            <label htmlFor="name">New Folder Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                value= {this.state.folderName.value}
                                onChange={(event) => this.updateName(event.target.value)}
                            />
                            {/* {this.state.folderName.touched && (
                                <ValidationError message={this.validateName()} />
                            } */}
                            <button
                                type="submit"
                                disabled={this.validateName()}
                            >
                                Add New Folder
                            </button>
                        </form>
                    )
                }}
            </Consumer>
            
        )
    }
}

AddFolderForm.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(AddFolderForm);