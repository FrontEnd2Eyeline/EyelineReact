import React, {Suspense} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeContainer from './pages/HomeContainer'
import AboutUsContainer from './pages/AboutUsContainer'
import './index.scss'

function App() {
  return (
  <div>
  <Suspense fallback={(<div>Loading</div>)}>
          <Router>
                <div>
                  <Route exact path="/" component={HomeContainer}/>
                  <Route exact path="/aboutus" component={AboutUsContainer}/>
                </div>
          </Router>
  </Suspense>
  </div>
  );
}

export default App;
