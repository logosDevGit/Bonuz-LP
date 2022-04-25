import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/global.css'
import NavBar from '../../components/NavBar';
import Contact from './views/Contact';
import Welcome from './views/Welcome';


const Home = () => {

    return(
        <>
            <NavBar/>
            <Welcome/>
            <Contact/>
        </>
    )
}

export default Home;