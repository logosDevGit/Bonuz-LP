import QualityBalloon from "../../../../components/QualityBalloon";
import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';

const ProvenQuality = () => {

    return(
        <div className="quality wd-cont">
            <StyledTitle title={"Qualidade Comprovada"}/>
            <QualityBalloon />
        </div>
    )
}

export default ProvenQuality;