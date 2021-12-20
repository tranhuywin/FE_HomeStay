import "./app.scss";
import {
  HomeRoute,
  RoomDetail,
  SearchResultRoute,
  UserRoute,
  PostRealEstate,
} from "./routes/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderBrand from "./components/headers/headerBrand";
import FooterCertification from "./components/footers/footerCertification";
import { Provider } from "react-redux";
import { createStore } from "redux";
import FilterSlice from "./Redux/features/Filter/FilterSlice";
import BookingRoom from "./pages/BookingRoom/BookingRoom";
import Header from "./components/Header/Header";
function App() {
  const store = createStore(FilterSlice);
  const routeHavenotFooter = ["/me", "home/login"];
  const routeChooseHeaderBrand = [
    "/me",
    "/rooms/result",
    "/search/rooms/result",
  ];
  console.log(window.location.pathname);
  return (
    <Router>
      {routeChooseHeaderBrand.includes(window.location.pathname) ? (
        <header>
          <Header />
        </header>
      ) : (
        <header>
          <HeaderBrand />
        </header>
      )}

      <Switch>
        <Provider store={store}>
          <Route path="/room">
            <RoomDetail />
          </Route>
          <Route path="/booking-room">
            <BookingRoom />
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
