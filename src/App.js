import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
   <Router>
   <Navbar/>
    <Switch>
      <Route  exact path='/' component={Home}  />
      <Route  path='/login' component={Login}  />
      <Route  path='/sign-up' component={Signup}  />
    </Switch>
   </Router>
   </>
  );
}

export default App;
