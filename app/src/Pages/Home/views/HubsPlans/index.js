import PlansCard from "../../../../components/PlansCard";
import StyledTitle from "../../../../components/StyledTitle"
import './styles.css';

const HubsPlans = () => {

    const plans = [
        {
            title: "Contabilidade para MEI",
            description: "Oportunidade ideal para trabalhadores informais aproveitarem diversas vantagens.",
            list: [
                'Relatório de Saúde Financeira',
                'Emissão das Guias de Impostos para facilitar o pagamento',
                'Certidões Negativas Mensais comprovando que você não deve nada',
                'Ajuda para regularizar atrasos com o governo',
                'Obrigações Anuais da sua empresa',
            ],
            value: 69.90
        },
        {
            title: "Simples Nacional Serviços: Básico",
            description: "Para empresas com faturamento até R$ 7.000,00/mês",
            list: [
                'Obrigações contábeis',
                'Contador online à disposição',
                'Assessoria para aquisição de certificado digital',
                'Emissão de faturamento',
                'Obrigações Fiscais',
                'Certidões negativas mensais',
            ],
            value: 99.90
        },
        {
            title: "Simples Nacional Serviços: Intermediário",
            description: "Para empresas com faturamento até R$ 50.000,00/mês e 2 funcionários registrados.",
            list: [
                'Contabilidade completa',
                'Contador online à disposição',
                'Emissão de faturamento',
                'Assessoria financeira',
                'Obrigações Fiscais',
                'Certidões negativas mensais',
            ],
            value: 199.90
        },
        {
            title: "Simples Nacional: Comércio",
            description: "Para empresas com faturamento até R$ 100.000,00/mês e 2 funcionários registrados",
            list: [
                'Contabilidade completa',
                'Assessoria para aquisição de certificado digital',
                'Emissão de faturamento',
                'Assessoria financeira',
                'Obrigações Fiscais',
                'Certidões negativas mensais',
            ],
            value: 299.90
        },
    ]

    return(
        <div className="plans wd-cont">
            <StyledTitle title={"Planos Hubs"}/>
            <p>contabilidade de rotina</p>
            <div className="cards">
                {plans.map((plan) => {
                    return <PlansCard title={plan.title} description={plan.description} list={plan.list} value={plan.value}/>
                })}
            </div>
            <small>*20% off para clientes Bonuz</small>
        </div>
    )
}

export default HubsPlans;