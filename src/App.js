import HeaderBrand from './components/headers/headerBrand'
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
