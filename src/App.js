import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Layout/Home';
import Test from './Screen/Test';
import Login from './Auth/Login';
function App() {

  return (
    <div className="App">
      <Router>
     
        <Switch>
          <Route path='/' component={Home} />
          
          <Route path='/test' component={Test} excat />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
