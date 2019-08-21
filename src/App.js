import React, {Suspense} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeContainer from './pages/HomeContainer'
import AboutUsContainer from './pages/AboutUsContainer'
import Loader from './pages/Loader'
import './index.scss'


function App() {
  return (
  <div>
  <Suspense fallback={(<Loader/>)}>
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
