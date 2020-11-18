import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddFolderForm extends Component {
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

        //rediret to home
        this.props.history.push('/');
    }
    
    

    render(){
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
                    value= {this.state.value}
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
    }
}

export default withRouter(AddFolderForm);