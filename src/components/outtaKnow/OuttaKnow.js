import Buttons from "../styleguide/buttons/Button"
import StaticOuttaKnowImage from "../../assets/images/demo-outta-know.jpg"
import "./outtaKnow.scss"

const outtaKnow = ({outtaKnowTitle, outtaKnowDescription, authorName}) => {
    return (
        <div className="outta-know section-spacing">
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-center section-title">You Outta Know</h1>
                    <div className="section-title-underline"></div>
                </div>
                
                <div className="row">
                <div className="col-lg-6">
                        <div>
                            <div className="mb-3">
                                <img src={StaticOuttaKnowImage} alt="outta know" className="img-fluid mb-2" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h3 className="mb-1">{outtaKnowTitle}</h3>
                        <h6 className="mb-3">{authorName}</h6>

                        <div className="brief">
                            <p className="mb-4">{outtaKnowDescription}</p>

                            <div className="text-center">
                                <Buttons btnType="primary" btnText="See More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

outtaKnow.defaultProps = {
    outtaKnowTitle: "Outta Know Title Here",
    outtaKnowDescription: `If you're looking for random paragraphs, you've come to the right place.
    When a random word or a random sentence isn't quite enough, the next logical
    step is to find a random paragraph. We created the Random Paragraph Generator
    with you in mind. The process is quite simple. Choose the number of random
    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
    will instantly appear. If you're looking for random paragraphs, you've come to the right place.
    When a random word or a random sentence isn't quite enough, the next logical
    step is to find a random paragraph. We created the Random Paragraph Generator
    with you in mind. The process is quite simple. Choose the number of random
    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
    will instantly appear.If you're looking for random paragraphs, you've come to the right place.
    When a random word or a random sentence isn't quite enough, the next logical
    step is to find a random paragraph. We created the Random Paragraph Generator
    with you in mind. The process is quite simple. Choose the number of random
    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
    will instantly appear. If you're looking for random paragraphs, you've come to the right place.
    When a random word or a random sentence isn't quite enough, the next logical
    step is to find a random paragraph. We created the Random Paragraph Generator
    with you in mind. The process is quite simple. Choose the number of random
    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
    will instantly appear.If you're looking for random paragraphs, you've come to the right place.
    When a random word or a random sentence isn't quite enough, the next logical
    step is to find a random paragraph. We created the Random Paragraph Generator
    with you in mind. The process is quite simple. Choose the number of random
    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
    will instantly appear. If you're looking for random paragraphs, you've come to the right place.
    When a random word or a random sentence isn't quite enough, the next logical
    step is to find a random paragraph. We created the Random Paragraph Generator
    with you in mind. The process is quite simple. Choose the number of random
    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
    will instantly appear.`,
    authorName: "Author Name"
}

export default outtaKnow
