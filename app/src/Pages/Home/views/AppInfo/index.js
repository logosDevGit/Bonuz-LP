
import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';
import AppleStore from "../../../../assets/images/appleStore.svg"
import AppMobile from "../../../../assets/images/appMobile.png"

const AppInfo = () => {


    return(
        <div className="app-info wd-cont">
            <div>
                <p>Tenha toda sua contabilidade nas suas mãos o tempo todo com nosso Aplicativo exclusivo para clientes.</p>
                <small>Baixe agora mesmo!</small>
                <div className="d-flex aling-items-center pt-4">
                    <button className="btn btn-yellow" >Quero baixar</button>
                    <img src={AppleStore} alt="Disponivel na Apple Store"/>
                </div>
            </div>
            <div>
                <img src={AppMobile} alt="Acesse o aplicativo"/>
            </div>
        </div>
    )
}

export default AppInfo;