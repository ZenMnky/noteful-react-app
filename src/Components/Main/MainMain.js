import React, {Component} from 'react';
import {Consumer} from '../Context'
import { Link } from 'react-router-dom';
import moment from 'moment';

class MainMain extends Component{
    render(){
        return(
            <Consumer>
                { ({notes, handleDeleteNote}) => {
                    let noteList = notes.map(note => {
                        let {id, name, modified} = note;
                        return(
                            <div className="noteListItem" >
                                <Link to={`/note/${id}`}><h2>{name}</h2></Link>
                                <p>Last modified: { moment(modified).calendar() }</p>
                                <input onClick={() => {
                                    handleDeleteNote(id)
                                }} type='button' value='Delete Note' />
                            </div>
                        );
                    })
                    return(
                        <div>
                            <h1>Main Main</h1>
                            {noteList}
                        </div>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default MainMain;