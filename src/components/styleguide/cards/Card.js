import Buttons from "../buttons/Button"
import TopGuideImage from "../../../assets/images/top-guide1.png"
import "./card.scss"

const Card = ({cardTitle, cardDescription, btnExistance, btnType, btnText}) => {
    return (
        <div className="mdg-card">
            <div>
                <img src={TopGuideImage} className="img-fluid mb-2" alt="card image" />
            </div>

            <div className="mb-3">
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
