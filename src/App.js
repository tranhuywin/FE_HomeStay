import HeaderBrand from './containers/apartmentCart'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HeaderBrand} />
      </Switch>
    </Router>
  );
}

export default App;
