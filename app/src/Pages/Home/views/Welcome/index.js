import Owl from "../../../../assets/images/welcomeComp.svg"
import './styles.css'

const Welcome = () => {
    return(
        <div className="welcome wd-cont">
            <div className="cont-1">
                <h1 className="my-4">Simplifique sua vida <span>contábil</span>.</h1>
                <p className="my-4">Tudo o que você precisa para estar em dia com a contabilidade, impostos e obrigações legais da sua empresa para no final do dia dormir tranquilo.</p>
                <a className="btn btn-red my-4" rel="noreferrer" target="_blank" href="https://hubscontabilidade.com.br/clubehubs/">Consultar planos</a>
            </div>
            <div>
                <img src={Owl} alt='Coruja aplicativo Hub'/>
            </div>
        </div>
    )
}

export default Welcome