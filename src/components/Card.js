import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, sub, des, image } }) {
    return (
        <StyledCard >
            <div>
            <h3>{title}</h3>
            </div>
            <div>
            <img src={`./images/${image}`} alt='' />
            <p id='sub-title'>{sub}</p>

            <p className='des'>{des}</p>
            </div>
            
        </StyledCard>
    )
}