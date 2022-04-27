import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';
import Partners1 from "../../../../assets/images/Partners/partner1.svg"
import Partners2 from "../../../../assets/images/Partners/partner2.svg"
import Partners3 from "../../../../assets/images/Partners/partner3.svg"

const Partners = () => {

    return(
        <div className="partners wd-cont">
            <StyledTitle title={"Parceiros"}/>
            <div className="d-flex justify-content-around py-5">
                <img src={Partners3} alt="Mercado Pago"/>
                <img src={Partners1} alt="Ifood"/>
                <img src={Partners2} alt="GetNinjas"/>
            </div>
        </div>
    )
}

export default Partners;