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
import CS1O1EP3 from './EventPages/CS1O1EP3'
import ResearchConnect1 from './EventPages/ResearchConnect1'
import RG_TCS_1 from './EventPages/RG_TCS_1'
import RG_WCS_0 from './EventPages/RG_WCS_0'
import RG_0 from './EventPages/RG_0'
import CS1O1EP2 from './EventPages/CS1O1EP2'
import Inauguration from './EventPages/Inauguration'

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
      <Route path='/events/CS1O1EP3' exact render={props => <CS1O1EP3 {...props} />}/>
      <Route path='/events/ResearchConnect/1' exact render={props => <ResearchConnect1 {...props} />}/>
      <Route path='/events/Reading_Group/Theoretical_CS/1' exact render={props => <RG_TCS_1 {...props} />}/>
      <Route path='/events/Reading_Group/Women_in_CS/0' exact render={props => <RG_WCS_0 {...props} />}/>
      <Route path='/events/Reading_Group/0' exact render={props => <RG_0 {...props} />}/>
      <Route path='/events/CS1O1EP2' exact render={props => <CS1O1EP2 {...props} />}/>
      <Route path='/events/Inauguration' exact render={props => <Inauguration {...props} />}/>
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
