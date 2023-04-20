import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );

  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      !loggedIn
        ? <Component {...props} handleLogin={handleLogin} />
        : <Redirect to='/' />
    )} />
  );

  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/' component={HomePage} />
        <PrivateRoute exact path='/profile' component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // do login logic here
    handleLogin();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <br />
      <Link to='/profile'>Go to Profile</Link>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to='/'>Go to Home</Link>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
};

export default App;
