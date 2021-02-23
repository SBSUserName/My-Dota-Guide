import Card from "../styleguide/cards/Card"
import Buttons from "../styleguide/buttons/Button"
import "./topGuides.scss"

const TopGuides = () => {
    return (
        <div className="top-guides section-spacing">
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-center section-title white-shadow">Top Guides</h1>
                    <div className="section-title-underline white-shadow"></div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-4 mar-bot">
                        <Card btnType="secondary" />
                    </div>

                    <div className="col-lg-4 mar-bot">
                        <Card btnType="secondary" />
                    </div>

                    <div className="col-lg-4">
                        <Card btnType="secondary" />
                    </div>
                </div>

                <div className="text-center">
                    <Buttons btnText="View All Guides" />
                </div>
            </div>
        </div>
    )
}

export default TopGuides
