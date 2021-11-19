import { BrowserRouter as Router } from "react-router-dom";
import FilterPopupModal from "./containers/filterPopupModal";

import './app.scss'
function App() {
  return (
    <Router>
      <FilterPopupModal />
    </Router>
  );
}

export default App;
