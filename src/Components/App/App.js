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
import SideBarNote from '../Sidebar/SideBarNote';

// View: Error handling
import fourOhFour from '../ErrorComponent/fourOhFour';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
            <ErrorBoundary>
              <Switch>
                <Route exact path='/' component={MainMain}/>
                <Route path='/folder/:folderid' component={MainFolder} />
                <Route path='/note/:noteid' component={MainNote} />
                <Route path='/AddNote' component={MainAddNote} />
                <Route path='/AddFolder' component={MainAddFolder} />
                <Route component={fourOhFour} />
              </Switch>
            </ErrorBoundary>
          </section>
          <section className="sideBar">
            <ErrorBoundary>
              <Switch>
                <Route exact path='/' component={SideBarMain}/>
                <Route path='/folder/:folderid' component={SideBarMain} />
                <Route path='/note/:noteid' component={SideBarNote} />
                <Route path='/AddNote' component={SideBarMain} />
                <Route path='/AddFolder' component={SideBarMain} />
                <Route component={SideBarMain} />
              </Switch>
            </ErrorBoundary>
          </section>

      </main>
    </div>
  );}
}

export default App;
