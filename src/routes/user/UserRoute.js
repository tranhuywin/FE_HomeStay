import { Route } from "react-router-dom";
import { User, ChangePassword, LinkAccount } from "../../pages";

function UserRoute() {
  return <>
  <Route exact path="/me" component={User} />;
  </>
}

export default UserRoute;
