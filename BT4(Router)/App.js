import { Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/product/:productId" component={ProductDetail} />
      <Route path="/admin" component={Admin} />
    </div>
  );
}

export default App;
