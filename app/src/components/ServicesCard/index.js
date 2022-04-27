import './styles.css';

const ServicesCard = ({title, description, image}) => {

    return (
        <div className='services-card'>
            <img src={image} att={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServicesCard;