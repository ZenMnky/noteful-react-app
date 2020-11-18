import React, {Component} from 'react';
import AddFolderForm from '../AddFolderForm/AddFolderForm';

class MainAddFolder extends Component{
    render(){
        return(
            <div>
                <h2>Add Folder</h2>
                <br />
                <AddFolderForm />
            </div>
        )
    }
}

export default MainAddFolder;