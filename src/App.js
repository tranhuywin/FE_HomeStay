import FooterCertification from './components/footers/footerCertification';
import HeaderBrand from './components/headers/headerBrand';
import { BrowserRouter as Router } from "react-router-dom";
import BannerSignUp from './components/banner/bannerSignUp';

function App() {
  return (
    <Router>

        <HeaderBrand/>
        <BannerSignUp/>
        <FooterCertification/>

    </Router>
  );
}

export default App;
