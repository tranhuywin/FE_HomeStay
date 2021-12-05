import { Route } from "react-router-dom";
import { User, ChangePassword, LinkAccount } from "../../pages";

function UserRoute() {
  return <>
  <Route exact path="/me/edit-account/profile" component={User} />;
  <Route exact path="/me/edit-account/change-password" component={ChangePassword} />;
  <Route exact path="/me/edit-account/link-account" component={LinkAccount} />;
  </>
}

export default UserRoute;
