import { AboutUs } from "../../pages/about_us/about_us";
import { Login } from "../../pages/auth/login/login";
import { ContactUs } from "../../pages/contact_us/contact_us";
import { Home } from "../../pages/home/home";
import "./body.css";

export const Body = ({ activePage })=>{
    const renderContent = () => {
        switch (activePage) {
          case 'home':
            return <Home/>;
          case 'aboutus':
            return <AboutUs/>;
          case 'contact':
            return <ContactUs/>;
          case 'login' :
            return <Login/>
          default:
            return <Home/>;
        }
      };
    
    return (<div className="body">
        {renderContent()}
    </div>)
}