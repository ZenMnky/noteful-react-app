import React, {Component} from 'react';
import {Consumer} from '../Context'
import moment from 'moment';

class MainMain extends Component{
    render(){
        return(
            <Consumer>
                {context => {
                    let notes = context.notes.map(note => {
                        return(
                            <div className="noteListItem" >
                                <h2>{note.name}</h2>
                                <p>Last modified: { moment(note.modified).calendar() }</p>
                                <input type='button' value='Delete Note' />
                            </div>
                        );
                    })
                    return(
                        <div>
                            <h1>Main Main</h1>
                            {notes}
                        </div>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default MainMain;