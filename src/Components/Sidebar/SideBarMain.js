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
                        <input type="button" value="Add Folder" />
                        <input type="button" value="Add Note" />
                    </div>
                
                    )
                }}
            </Consumer>
            
        )
    }
}

export default SideBarMain;