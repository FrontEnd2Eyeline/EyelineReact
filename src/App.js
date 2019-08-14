import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeContainer from './pages/HomeContainer'
import AboutUsContainer from './pages/AboutUsContainer'

function App() {
  return (
    <Router>
          <div>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/aboutus" component={AboutUsContainer}/>
          </div>
    </Router>
  );
}

export default App;
