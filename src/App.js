import "./app.scss";
import {
  HomeRoute,
  RoomDetail,
  SearchResultRoute,
  UserRoute,
  PostRealEstate
} from "./routes/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderBrand from "./components/headers/headerBrand";
import FooterCertification from "./components/footers/footerCertification";
import { Provider } from "react-redux";
import { createStore } from "redux";
import FilterSlice from "./Redux/features/Filter/FilterSlice";

function App() {
  const store = createStore(FilterSlice);
  const routeHavenotFooter = ["/me"];
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
          <Route path="/post">
            <PostRealEstate />
          </Route>
        </Provider>
      </Switch>
      {!routeHavenotFooter.includes(window.location.pathname) && (
      <footer>
        <FooterCertification />
      </footer>
      )}
    </Router>
  );
}

export default App;
