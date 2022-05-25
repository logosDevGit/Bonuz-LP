import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';

const Hubs = () => {

    return(
        <div className="hubs wd-cont">
            <StyledTitle title={"Hubs"}/>
            <p>Descomplicando o dia dia do pequeno e médio empreendedor a partir da contabilidade digital. Usamos a tecnologia para proporcionar a melhor experiência  para você. Tiramos todas as suas dúvidas e ajudamos você a tomar as melhores decisões para o seu negócio.</p>
            <div className="media">
                <iframe src="https://www.bonuz.it/hubs-bonuz/hubs.mp4?t=1653509066"/>
            </div>
        </div>
    )
}

export default Hubs;