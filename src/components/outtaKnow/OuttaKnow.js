import Buttons from "../styleguide/buttons/Button"
import StaticOuttaKnowImage from "../../assets/images/demo-outta-know.jpg"
import "./outtaKnow.scss"

const outtaKnow = () => {
    return (
        <div className="outta-know">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 d-flex align-items-center">
                        <div>
                            <h1 className="mb-4">You Outta Know</h1>
                            <h6>Title Here</h6>

                            <ul>
                                <li>Points to focus on (3 to 5)</li>
                                <li>Points to focus on (3 to 5)</li>
                                <li>Points to focus on (3 to 5)</li>
                                <li>Points to focus on (3 to 5)</li>
                                <li>Points to focus on (3 to 5)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div>
                            <div className="mb-3">
                                <img src={StaticOuttaKnowImage} alt="outta know" className="img-fluid" />
                            </div>

                            <h3>Title Here</h3>

                            <div className="brief">
                                <p>
                                    If you're looking for random paragraphs, you've come to the right place.
                                    When a random word or a random sentence isn't quite enough, the next logical
                                    step is to find a random paragraph. We created the Random Paragraph Generator
                                    with you in mind. The process is quite simple. Choose the number of random
                                    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
                                    will instantly appear. If you're looking for random paragraphs, you've come to the right place.
                                    When a random word or a random sentence isn't quite enough, the next logical
                                    step is to find a random paragraph. We created the Random Paragraph Generator
                                    with you in mind. The process is quite simple. Choose the number of random
                                    paragraphs you'd like to see and click the button. Your chosen number of paragraphs
                                    will instantly appear.
                                </p>

                                <div className="text-center">
                                    <Buttons btnType="primary" btnText="See More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default outtaKnow
