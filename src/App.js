import { BrowserRouter as Router } from "react-router-dom";
import Numericupdown from "./components/filterPopup/numericupdown";
import MultiCheckbox from "./components/filterPopup/multiCheckbox";

import './app.scss'
function App() {
  return (
    <Router>
     <Numericupdown title="Giường"></Numericupdown>
     <MultiCheckbox name = "tiện ích chung"
     checkboxs ={['1', '2', '3', '4', '5', '6', '7']}
     ></MultiCheckbox>
    </Router>
  );
}

export default App;
