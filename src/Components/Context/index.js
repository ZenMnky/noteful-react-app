import React, {Component} from 'react';
import DATA from '../../dummy-store';

const NotefulContext = React.createContext();
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

      handleDeleteNote = (id) => {
        // this.props.history.push('/')

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
            handleDeleteNote: this.handleDeleteNote
        }

        return(
            <NotefulContext.Provider value={contextValues}>
                {this.props.children}
            </NotefulContext.Provider>
        );
    }
}

export const { Consumer } = NotefulContext;
