import './App.css';
import React from 'react'
import NavigationBar from './components/NavBar';
import About from './containers/About';
import Projects from './containers/Projects';
import Resume from './containers/Resume';

import {Route, Redirect, Switch, HashRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <HashRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path='/' render={() =>(
            <Redirect to='/About'/>
          )}/>
          <Route path='/About' component={About}></Route>
          <Route path='/resume' component={Resume}></Route>
          <Route path='/projects' component={Projects}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
