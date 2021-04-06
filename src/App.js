import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Dashboard from './pages/Dashboard';

function App() {
  return (
     <Router>
        <Switch>

          <Route exact path='/'>
            <Register/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/login2'>
            <Login2/>
          </Route>

          <Route exact path='/dashboard'>
            <Dashboard/>
          </Route>
          
          {/* <Route exact path='/'>
            <Home/>
          </Route> */}

         
          {/* <Route
            exact
            path={`/paynow`}
            component={Paynow}
          /> */}
          
      </Switch>
    </Router>

 
  );
}

export default App;
