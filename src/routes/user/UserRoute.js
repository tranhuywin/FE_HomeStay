import { Route } from "react-router-dom";
import { EditProfile } from "../../pages";

function UserRoute() {
  return <>
  <Route exact path="/me/edit-account/profile" component={EditProfile} />;
  <Route exact path="/me/edit-account/change-password" component={EditProfile} />;
  </>
}

export default UserRoute;
