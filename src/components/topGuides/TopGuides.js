import Card from "../styleguide/cards/Card"
import Buttons from "../styleguide/buttons/Button"
import "./topGuides.scss"

const TopGuides = () => {
    return (
        <div className="top-guides">
            <div className="container">
                <h1 className="mb-5 text-center" style={{color: "white"}}>Top Guides</h1>

                <div className="row mb-5">
                    <div className="col-sm-4">
                        <Card btnType="secondary" />
                    </div>

                    <div className="col-sm-4">
                        <Card btnType="secondary" />
                    </div>

                    <div className="col-sm-4">
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
