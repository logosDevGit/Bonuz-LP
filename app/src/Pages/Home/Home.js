import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/global.css'
import "../../assets/styles/responsive.css"
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import AppInfo from './views/AppInfo';
import Contact from './views/Contact';
import Hubs from './views/Hubs';
import HubsPlans from './views/HubsPlans';
import HubsService from './views/HubsService';
import LittleHub from './views/LittleHub';
import Partners from './views/Partners';
import ProvenQuality from './views/ProvenQuality';
import Welcome from './views/Welcome';
import { BrowserRouter as Route } from 'react-router-dom';

const Home = () => {

    return(
        <Route>
            <NavBar/>
            <Welcome/>
            <Contact/>
            <ProvenQuality/>
            <HubsService/>
            <Hubs/>
            <HubsPlans/>
            <LittleHub/>
            <Partners/>
            <AppInfo/>
            <Footer/>
        </Route>
    )
}

export default Home;