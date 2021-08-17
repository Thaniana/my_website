import './App.css';
import React from 'react'
import NavigationBar from './components/NavBar';
import About from './containers/About';
import Projects from './containers/Projects';
import Hiking from './containers/Hiking';
import Resume from './containers/Resume';
import Classes from './containers/Classes';

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
          <Route path='/Hiking' component={Hiking}></Route>
          <Route path='/Classes' component={Classes}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
