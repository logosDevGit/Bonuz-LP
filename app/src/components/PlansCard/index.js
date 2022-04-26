import './styles.css';

const PlansCard = ({title, description, list, value}) => {

    return (
        <div className='plans-card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {list?.map((line, count) => {
                    return <li key={count}>{line}</li>
                })}
            </ul>
            <div className='price-area'>
                <div className='price-cont'>
                    <h5>{`R$ ${value}0`}</h5>
                </div>
                <span>*PLANO MENSAL</span>
            </div>
        </div>
    )
}

export default PlansCard;