import React, {Component} from 'react';
import DATA from '../../dummy-store';

const NotefulContext = React.createContext();

export class Provider extends Component {
    constructor(props){
        super(props);
        this.state={
          notes: [],
          folders: []
        }
      }

    componentDidMount = () => {
      this.setState({
          notes: DATA.notes,
          folders: DATA.folders
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
