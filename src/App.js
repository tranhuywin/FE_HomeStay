import ModalLogin from './pages/login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={ModalLogin} />
      </Switch>
    </Router>
  );
}

export default App;
