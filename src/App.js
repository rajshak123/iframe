import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PublicRoute from './Utils/PublicRoute'
import PrivateRoute from './Utils/PrivateRoute'
import LoginPage from './login';
import Dashboard from './mainDashboard';
// import MainPage from './mainPage';
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage}></PublicRoute>
          <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
