import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Products from './pages/products';
import RegisterProducts from './pages/registerProducts';
import RegisterProductsMaterial from './pages/registerProductsMaterial';
import Tests from './pages/tests';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tests" component={Tests} />
        <Route path="/products" component={Products} />
        <Route path="/registerProducts" component={RegisterProductsMaterial} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
