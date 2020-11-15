// Dependencies
import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';




// View: Main
import MainMain from '../Main/MainMain';
import MainNote from '../Main/MainNote';
import MainFolder from '../Main/MainFolder'; 
import MainAddNote from '../Main/MainAddNote'; 
import MainAddFolder from '../Main/MainAddFolder';

// View: SideBar
import SideBarMain from '../Sidebar/SideBarMain';
// import SideBarNote from '../Sidebar/SideBarNote';
// import SideBarFolder from '../Sidebar/SideBarFolder';
// import SideBarAddNote from '../Sidebar/SideBarAddNote';
// import SideBarAddFolder from '../Sidebar/SideBarAddFolder';

// View: Page not ound
import fourOhFour from '../ErrorComponent/fourOhFour';

// Styles
import 'normalize.css';
import './css/App.css';

// Logic
class App extends Component {

  render() {
    
    return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
      </header>
      <main className="flexContainer">

          <section className="mainContent NoteContainer">
            <Switch>
              <Route exact path='/' component={MainMain}/>
              <Route path='/folder/:folderid' component={MainFolder} />
              <Route path='/note/:noteid' component={MainNote} />
              <Route path='/AddNote' component={MainAddNote} />
              <Route path='/AddFolder' component={MainAddFolder} />
              <Route component={fourOhFour} />
            </Switch>
          </section>
          <section className="sideBar">
            <Switch>
              <Route exact path='/' component={SideBarMain}/>
              <Route path='/folder/:folderid' component={SideBarMain} />
              <Route path='/note/:noteid' component={SideBarMain} />
              <Route path='/AddNote' component={SideBarMain} />
              <Route path='/AddFolder' component={SideBarMain} />
              <Route component={SideBarMain} />
            </Switch>
          </section>

      </main>
    </div>
  );}
}

export default App;
