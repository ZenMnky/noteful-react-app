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
                        <NavLink 
                            to={`/folder/${folder.id}`}
                            key={folder.id}
                        >
                        <li id={folder.id}>
                            {folder.name}                   
                        </li>
                    </NavLink>
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