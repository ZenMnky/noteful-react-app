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
    
    render(){
        const contextValues = {
            ...this.state
        }

        return(
            <NotefulContext.Provider value={contextValues}>
                {this.props.children}
            </NotefulContext.Provider>
        );
    }
}

export const { Consumer } = NotefulContext;
