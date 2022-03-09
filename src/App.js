// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   pageSize = 5;

//   state = {
//     progress:0
//   }

//   setProgress = (progress)=>{
//     this.setState({progress: progress})
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={this.state.progress} 
//       />
//         <Switch>
//           <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const pageSize = 5;
  const[progress,setProgress]=useState(0)

  


    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
  export default App;
