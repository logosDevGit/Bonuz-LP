import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/global.css'
import NavBar from '../../components/NavBar';
import Contact from './views/Contact';
import HubsService from './views/HubsService';
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
        </>
    )
}

export default Home;