import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
// import Events from './Events'
// import Blogs from './Blogs'
// import Team from './Team'
import About from './About'
import Contact from './Contact'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />}/>
      {/* <Route path='/events' exact render={props => <Events {...props} />}/>
      <Route path='/blogs' exact render={props => <Blogs {...props} />}/>
      <Route path='/team' exact render={props => <Team {...props} />}/> */}
      <Route path='/about' exact render={props => <About {...props} />}/>
      <Route path='/contact' exact render={props => <Contact {...props} />}/>
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
