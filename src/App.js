// Dependencies
import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';

// Components
import {
  MainMain, 
  MainNote, 
  MainFolder, 
  MainAddNote, 
  MainAddFolder
} from './Components/Main';

import {
  SideBarMain,
  SideBarNote,
  SideBarFolder,
  SideBarAddNote,
  SideBarAddFolder
} from './Components/Sidebar';

import { fourOhFour } from './Components/Error';

// Styles
import './Components/css/App.css';

// Logic
class App extends Component {
  render()
  {
    return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>
      <main>
        <section className="mainContent">
          <Switch>
            <Route exact path='/' compoenet={MainMain}/>
            <Route path='folder/:folderid' component={MainFolder} />
            <Route path='/note/:noteid' component={MainNote} />
            <Route path='/AddNote' component={MainAddNote} />
            <Route path='/AddFolder' component={MainAddFolder} />
            <Route compoent={fourOhFour} />
          </Switch>
        </section>
        <section classname="sideBar">
          <Switch>
            <Route exact path='/' compoenet={SideBarMain}/>
            <Route path='folder/:folderid' component={SideBarFolder} />
            <Route path='/note/:noteid' component={SideBarNote} />
            <Route path='/AddNote' component={SideBarAddNote} />
            <Route path='/AddFolder' component={SideBarAddFolder} />
            <Route component={} />
          </Switch>
        </section>

      </main>
    </div>
  );}
}

export default App;
