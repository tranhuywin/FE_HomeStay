import { Route } from "react-router-dom";
import {  PostRealEstate } from "../../pages";

function HostRoute() {
  return <>
  <Route exact path="/post" component={PostRealEstate} />;
  </>
}

export default HostRoute;
