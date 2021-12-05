import { Route } from "react-router-dom";

import Register from "../../pages/loginandregister/register";
function RegisterRoute() {
  return (
    <div>
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default RegisterRoute;
