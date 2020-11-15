import React, {Component} from 'react';

class SideBarNote extends Component{
    render(){
        return(
            <div>
                <h1>SideBarNote</h1>
                <input type="button" value="Go Back" onClick={console.log('back button clicked')} />;
            </div>
        )
    }
}

export default SideBarNote;