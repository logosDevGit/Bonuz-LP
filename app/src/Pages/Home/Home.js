import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/global.css'
import NavBar from '../../components/NavBar';
import AppInfo from './views/AppInfo';
import Contact from './views/Contact';
import HubsPlans from './views/HubsPlans';
import HubsService from './views/HubsService';
import LittleHub from './views/LittleHub';
import Partners from './views/Partners';
import ProvenQuality from './views/ProvenQuality';
import Welcome from './views/Welcome';


const Home = () => {

    return(
        <>
            <NavBar/>
            <Welcome/>
            <Contact/>
            <ProvenQuality/>
            <HubsService/>
            <HubsPlans/>
            <LittleHub/>
            <Partners/>
            <AppInfo/>
        </>
    )
}

export default Home;