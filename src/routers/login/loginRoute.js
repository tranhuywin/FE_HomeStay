import { Route } from "react-router-dom";
import Login from "../../pages/login";

function LoginRoute() {
  return (
    <div>
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default LoginRoute;