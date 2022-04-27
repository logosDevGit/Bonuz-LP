import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';
import Hubinho from "../../../../assets/images/hubinho.svg"

const LittleHub = () => {

    return(
        <div className="little-hub wd-cont">
            <div className="info">
                <StyledTitle title={"Hubinho"}/>
                <p>
                O Hubinho te mantém infomado sobre tudo através do WhatsApp e fornece um canal para tirar qualquer dúvida com nossos especialistas sempre que precisar.
                </p>
            </div>
            <div className="hubinho">
                <img src={Hubinho} alt="Hubinho" />
            </div>
        </div>
    )
}

export default LittleHub;