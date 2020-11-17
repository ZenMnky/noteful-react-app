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
    /**
     * implement two fetch requests: /folders and /notes endpoints
     */
    componentDidMount = () => {
      //fetch /folders
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
        console.log('response okay!')
        return res.json();
        
      })
      //update state
      .then(folderData => this.setState({folders: folderData}))
      //catch errors
      .catch(error => this.setState({ error }))
      

      //fetch /notes
      //parse to data
      //update state
      this.setState({
          notes: DATA.notes,
          
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
