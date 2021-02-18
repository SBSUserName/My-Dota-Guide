import Buttons from "../buttons/Button"
import "./card.scss"

const Card = ({cardTitle, cardDescription, btnExistance, btnType, btnText}) => {
    return (
        <div className="mdg-card">
            <div>
                <h5>{cardTitle}</h5>
                <p>{cardDescription}</p>
            </div>
            
            {btnExistance ? <div>
                <Buttons btnType={btnType} btnText={btnText} />
            </div> : null }
        </div>
    )
}

Card.defaultProps = {
    cardTitle: "Card Title",
    cardDescription: "A brief card description",
    btnExistance: true
}

export default Card
