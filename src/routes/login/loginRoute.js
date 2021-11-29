import { Route } from "react-router-dom";
import Login from "../../pages/loginandregister/login";
import Register from "../../pages/loginandregister/register";
function LoginRoute() {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Login} />
    </div>
  );
}

export default LoginRoute;
