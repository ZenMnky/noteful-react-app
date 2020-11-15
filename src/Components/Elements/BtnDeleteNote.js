import React, {Component} from 'react';
import {Consumer} from '../Context';

class BtnDeleteNote extends Component {
    render(){
        let {id} = this.props;
        return(
            <Consumer>
                {({handleDeleteNote}) => {
                    return(
                        <input 
                            onClick={(event) => {
                                console.log('id: ', id)
                                handleDeleteNote(id)
                            }} 
                            type='button' 
                            value='Delete Note' 
                        />
                    )
                }}
            </Consumer>
            
        )
    }

}

export default BtnDeleteNote;