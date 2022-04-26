import './styles.css';

const StyledTitle = ({title}) => {

    return (
        <div className='styled-title'>
            <div className="yellow-line"></div>
            <h2>{title}</h2>
            <div className="yellow-line"></div>
        </div>
    )
}

export default StyledTitle;