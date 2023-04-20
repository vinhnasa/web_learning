import React, { useSearchParams, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get('type');

  const handleUpdateParam = () => {
    setSearchParams({ type: 'USER' });
  }

  return (
    <div>
      <p>Type: {type}</p>
      <button onClick={handleUpdateParam}>Update Type</button>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist</p>
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
