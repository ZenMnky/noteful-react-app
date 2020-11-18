import React, {Component} from 'react';
import {Consumer} from '../Context';
import PropTypes from 'prop-types';

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

BtnDeleteNote.propTypes = {
    id: PropTypes.string.isRequired
}

export default BtnDeleteNote;