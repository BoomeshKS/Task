import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Allroutes from './Allroutes';

function App() {
  return (
    <div>
      <Router>
        <Allroutes />
      </Router>
    </div>
  );
}

export default App;
