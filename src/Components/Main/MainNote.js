import React, {Component} from 'react';
import {Consumer} from '../Context'
import moment from 'moment';

class MainNote extends Component{
    render(){
        return(
            <Consumer>
                {({notes}) => {
                    let {noteid} = this.props.match.params;
                    let selectedNote = notes.find(note => note.id === noteid);
                    console.log(selectedNote);

                    let {
                        name,
                        modified,
                        content
                    } = selectedNote;


                    return(
                        <section>
                            <div className="noteListItem" >
                                <h2>{name}</h2>
                                <p>Last modified: { moment({modified}).calendar() }</p>
                                <input type='button' value='Delete Note' />
                            </div>
                            <div className="noteListItem-content">
                                <p>{content}</p>
                            </div>
                        </section>
                    );
                }}
            </Consumer>
            
        )
    }
}

export default MainNote;