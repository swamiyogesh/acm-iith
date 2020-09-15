import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Events from './Events'
import News from './News'
// import Team from './Team'
import About from './About'
import MachineIntelligence from './Groups/MachineIntelligence'
import Systemsandnetwork from './Groups/Systemsandnetwork'
import TheoreticalCS from './Groups/TheoreticalCS'
import WomenInCS from './Groups/WomenInCS'
import Projects from './Resources/Projects'
import Posts from './Resources/Posts'
import Publications from './Resources/Publications'
import Joinus from './Joinus'
import JoinusOld from './JoinusOld'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />}/>
      <Route path='/events' exact render={props => <Events {...props} />}/>
      <Route path='/news' exact render={props => <News {...props} />}/>
      {/* <Route path='/team' exact render={props => <Team {...props} />}/> */}
      <Route path='/about' exact render={props => <About {...props} />}/>
      <Route path='/info/machine-intelligence' exact render={props => <MachineIntelligence {...props} />}/>
      <Route path='/info/systems-and-network' exact render={props => <Systemsandnetwork {...props} />}/>
      <Route path='/info/theoretical-cs' exact render={props => <TheoreticalCS {...props} />}/>
      <Route path='/info/women-in-cs' exact render={props => <WomenInCS {...props} />}/>
      <Route path='/Projects' exact render={props => <Projects {...props} />}/>
      <Route path='/Posts' exact render={props => <Posts {...props} />}/>
      <Route path='/Publications' exact render={props => <Publications {...props} />}/>
      <Route path='/joinus' exact render={props => <Joinus {...props} />}/>
      <Route path='/joinusold' exact render={props => <JoinusOld {...props} />}/>
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
