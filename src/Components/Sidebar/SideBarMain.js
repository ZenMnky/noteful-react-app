import React, {Component} from 'react';
import {Consumer} from '../Context'
import {NavLink} from 'react-router-dom';
import './css/SideBarStyles.css';

class SideBarMain extends Component{
    render(){
        return(
            <Consumer>
                {context => {
                let folderLinks = context.folders.map(folder => {
                    return(
                        // <li id={folder.id}>
                            <NavLink 
                                to={`/folder/${folder.id}`}
                                key={folder.id}
                            >
                            
                                {folder.name}                   
                            
                            </NavLink>
                        // </li>
                    )
                })

                return(
                        
                    <div id="sidebar">
                        <ul>
                            {folderLinks}
                        </ul>
                        <button 
                            type="button" 
                            onClick={() => {this.props.history.push('/AddFolder')}}
                        >
                            Add Folder
                        </button>
                        <button 
                            type="button"
                            onClick={() => { this.props.history.push('/AddNote') }}
                        >
                            Add Note
                        </button>
                    </div>
                
                    )
                }}
            </Consumer>
            
        )
    }
}

export default SideBarMain;