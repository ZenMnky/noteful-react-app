import React, { Component } from 'react';
import { Consumer, NotefulContext } from '../Context';
import { withRouter } from 'react-router-dom';


 class AddNote extends Component{
    static contextType = NotefulContext;

    state = {
        title:{
            value: '',
            touched: false
        },
        content: {
            value: '',
            touche: false
        },
        folder: {
            value: '',
            touche: false
        }
    }

    /*=============================================
    =            form state-update handlers            =
    =============================================*/
    updateTitle(title){
        this.setState({title: {value: title, touched: true}})
    }
    
    updateContent(content){
        this.setState({content: {value: content, touched: true}})
    }

    updateFolder(folder){
        let folderId = this.getFolderIdByName(folder)
        this.setState({folder: {value: folderId, touched: true}})
    }

    getFolderIdByName(folderName){
        let folder = this.context.folders.find(folder => folder.name === folderName)
        return folder.id;
    }

    /*=====  End of form state-update handlers  ======*/
    
    /*=============================================
    =            form validation methods            =
    =============================================*/
    validateTitle(){
        const title = this.state.title.value.trim();
        if (title.length === 0){
            return 'Name is required'
        } else if (title.length < 3){
            return 'Name must be at least 3 characters long';
        }
    }

    /*=====  End of form validation methods  ======*/
    

    handleSubmit = (event) => {    
        event.preventDefault();
        let title = this.state.title.value
        let content = this.state.content.value
        let folder = this.state.folder.value
        

        //post to API and to Store
        this.context.addNoteRequest(title, content, folder)
        //rediret to home
        this.props.history.push('/');
    }
    render(){
        return(
            <Consumer>
                {(context) => {
                    
                    //generate a folder select-option for each
                    let folderOptions = context.folders.map(folder => {
                        return(
                            <option 
                                value={folder.name}
                                data-folderId={folder.id}
                            >
                                {folder.name}
                            </option>
                        )
                    });
                    
                    return(
                        <form 
                            id="addNoteForm"
                            onSubmit={event => this.handleSubmit(event)}
                        >
                            <label htmlFor="name">Title:</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                value= {this.state.title.value}
                                onChange={(event) => this.updateTitle(event.target.value)}
                            />
                            {/* {this.state.title.touched && (
                                <ValidationError message={this.validateTitle()} />
                            } */}

                            <label htmlFor="content">Content:</label>
                            <input 
                                type="textarea"
                                name="content"
                                id="addNoteForm__content"
                                value = {this.state.content.value}
                                onChange={(event) => this.updateContent(event.target.value)}
                            />
                            <select 
                                name='folder' 
                                id='addNoteForm__selectFolder' 
                                form='addNoteForm'
                                onChange={ (e) => this.updateFolder(e.target.value) }   
                            >
                                {folderOptions}
                            </select>
                            <button
                                type="submit"
                                disabled={this.validateTitle()}
                            >
                                Save
                            </button>
                        </form>
                    )
                }}
            </Consumer>
        )
    }
}

export default withRouter(AddNote);