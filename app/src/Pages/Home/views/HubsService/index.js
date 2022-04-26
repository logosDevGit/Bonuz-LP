import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';
import Image1 from "../../../../assets/images/services/comp1.svg"
import Image2 from "../../../../assets/images/services/comp2.svg"
import Image3 from "../../../../assets/images/services/comp3.svg"
import ServicesCard from "../../../../components/ServicesCard";

const HubsService = () => {

    const services = [
        {
            title: "Modernidade",
            description: "Emita notas fiscais, solicite guias e tenha acesso aos documentos de sua empresa de forma simples e eficiente em nossa plataforma digital disponível 24 horas por dia!",
            image: Image3
        },
        {
            title: "Contabilidade de Rotina",
            description: "Relatórios para ter clareza da saúde financeira, atividades contábeis e fiscais, soluções para diminuições de impos, além de certidões negativas mensais comprovando que você não deve nada.",
            image: Image2
        },
        {
            title: "Pessoas",
            description: "Folha de pagamento, obrigações legais, admissões e demissões, pro labore, recrutamento e seleção, cargos e salários, pesquisa de clima, avaliação de desempenho e atuação consultiva.",
            image: Image1
        },
    ]

    return(
        <div className="quality wd-cont">
            <StyledTitle title={"Serviços Hubs"}/>

            <div className="d-flex justify-content-around align-items-center">
                {services.map(({title, image, description}) => {
                    return <ServicesCard title={title} image={image} description={description} />
                })}
            </div>
        </div>
    )
}

export default HubsService;