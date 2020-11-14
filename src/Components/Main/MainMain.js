import React, {Component} from 'react';
import {Consumer} from '../Context'

class MainMain extends Component{
    render(){
        return(
            <Consumer>
                {context => {
                    let folders = context.folders.map(folder => {
                        return(
                            <div>
                                <p>{folder.name}</p>
                                <p>{folder.id}</p>
                            </div>
                        );
                    })
                    return(
                        <div>
                            <h1>Main Main</h1>
                            {folders}
                        </div>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default MainMain;