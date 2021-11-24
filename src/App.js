import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginRoute, RegisterRoute } from "./routers";
import HeaderBrand from "./components/headers/headerBrand";
import FooterCertification from "./components/footers/footerCertification";

import "./app.scss";
function App() {
  return (
    <Router>
      <header>
        <HeaderBrand />
      </header>

      <Switch>
        <Route path="/login">
          <LoginRoute />
        </Route>
        <Route path="/register">
          <RegisterRoute />
        </Route>
      </Switch>

      <footer>
        <FooterCertification />
      </footer>
    </Router>
  );
}

export default App;
