import React, {Component} from 'react';
import {Consumer} from '../Context'
import {NavLink} from 'react-router-dom';
import AddNoteBtn from '../Elements/BtnAddNote';
import AddFolderBtn from '../Elements/BtnAddFolder';
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
                                {folder.name}                   
                            </NavLink>
                    )
                })

                return(
                        
                    <div id="sidebar">
                        <ul>
                            {folderLinks}
                        </ul>
                        <AddFolderBtn />
                        <AddNoteBtn />
                    </div>
                
                    )
                }}
            </Consumer>
            
        )
    }
}

export default SideBarMain;