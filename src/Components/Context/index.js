import React, {Component} from 'react';
import cuid from 'cuid';
import PropTypes from 'prop-types';

export const NotefulContext = React.createContext();
const API_ENDPOINT = 'http://localhost:9090';

export class Provider extends Component {
    constructor(props){
        super(props);
        this.state={
          notes: [],
          folders: [],
          error: null
        }
      }

      addFolder = (folder) => {
        this.setState({
          folders: [...this.state.folders, folder]
        })
      }

      addNote = (note) => {
        this.setState({
          notes: [...this.state.notes, note]          
        })
      }

      handleDeleteNote = (id) => {

        this.setState(prevState => {
          return {
            notes: prevState.notes.filter(note => note.id !== id)
          }        
        })
      }


      
      /**
       * deleteNoteRequest
       * Delete note from API and local state
       * @param {number} noteId
       * @param {function} deleteCallBack - uses the noteId to delete note from local staet 
       */
      deleteNoteRequest = (noteId, deleteCallBack) => {
        fetch(API_ENDPOINT + `/notes/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          if(!res.ok){
            return res.json().then(error => {throw error})
          }
          return res.json();
        })
        .then(data => {
          //remove from local state
          deleteCallBack(noteId)
        })
        .catch(error => {
          console.error(error)
        })
      }

      /**
       * addFolderRequest
       * Adds new Folder to API & Local State
       * @param {string} folderName 
       * @param {function} addFolderCB - add folder object to local storage
       */
      addFolderRequest = (folderName, addFolderCB) => {
        //construct body data
        let newFolder = {
          name: folderName,
          id: cuid() //generates random id
        }

        fetch(API_ENDPOINT + '/folders', {
          method: 'POST',
          body: JSON.stringify(newFolder),
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          if(!res.ok){
            return res.json().then(error => {throw error})
          }
          return res.json();
        })
        .then(data => {
          //update local state
          addFolderCB(newFolder)
        })
        .catch(error => {
          console.error(error)
        })
      }

      /**
       * addNoteRequest
       * Adds new Folder to API & Local State
       * @param {string} title 
       * @param {string} content
       * @param {string} folder
       * 
       */
      addNoteRequest = (title, content, folder) => {
        //construct body data

        let date = new Date();
        let isoDate = date.toISOString();

        let newNote = {
          content: content,
          folderId: folder,
          id: cuid(), //generates random id
          modified: isoDate,
          name: title
          
        }

        fetch(API_ENDPOINT + '/notes', {
          method: 'POST',
          body: JSON.stringify(newNote),
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          if(!res.ok){
            return res.json().then(error => {throw error})
          }
          return res.json();
        })
        .then(data => {
          //update local state
          this.addNote(newNote)
        })
        .catch(error => {
          console.error(error)
        })
      }
    
    

    componentDidMount = () => {
    
      /*=============================================
      =            FETCH DATA            =
      =============================================*/
      
      // FETCH FOLDERS
      fetch(API_ENDPOINT + '/folders', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        //if not okay, throw error
        if(!res.ok){
          throw new Error(res.status)
        }
        //other wise, return parsed response
        return res.json();
        
      })
      //update state
      .then(folderData => this.setState({folders: folderData}))
      //catch errors
      .catch(error => this.setState({ error }))
      

      // FETCH NOTES
      fetch(API_ENDPOINT + '/notes', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        if(!res.ok){
          throw new Error(res.status)
        }
        return res.json();
      })
      .then(noteData => {
        this.setState({notes: noteData})
      })
      .catch(error => this.setState({ error }))
      /*=====  End of FETCH DATA  ======*/
      
    }
      

    render(){
        const contextValues = {
            ...this.state,
            handleDeleteNote: this.handleDeleteNote,
            deleteNoteRequest: this.deleteNoteRequest,
            addFolder: this.addFolder,
            addFolderRequest: this.addFolderRequest,
            addNoteRequest: this.addNoteRequest,
            addNote: this.addNote,
            testContext: () => {console.log('context test!')}
        }

        return(
            <NotefulContext.Provider value={contextValues}>
                {this.props.children}
            </NotefulContext.Provider>
        );
    }
}

Provider.propTypes = {
  children: PropTypes.element
}

export const { Consumer } = NotefulContext;
