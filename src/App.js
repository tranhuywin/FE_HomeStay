import "./app.scss";
import { HomeRoute, RoomDetail, SearchResultRoute, UserRoute } from "./routes/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Header, Footer } from "./components";
import HeaderBrand from './components/headers/headerBrand';
import FooterCertification from './components/footers/footerCertification';
import { Provider } from "react-redux";
import { createStore } from "redux";
import FilterSlice from "./Redux/features/Filter/FilterSlice";

function App() {
  const store = createStore(FilterSlice);
  return (
    <Router>
      <header>
        <HeaderBrand />
      </header>
      <Switch>
        <Provider store={store}>
          <Route path="/room">
            <RoomDetail />
          </Route>
          <Route path="/search">
            <SearchResultRoute />
          </Route>
          <Route path="/">
            <HomeRoute />
          </Route>
          <Route path="/me">
            <UserRoute />
          </Route>
        </Provider>
      </Switch>
      <footer>
        <FooterCertification />
      </footer>
    </Router>
  );
}

/// Router bi cai gi roi
// Toi ::
////// LAM XONG FILTER
////// CATEGORY PAGE
///// Elastic Search
///// CMS Theme

export default App;
