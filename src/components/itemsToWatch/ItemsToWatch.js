import Buttons from "../styleguide/buttons/Button"
import "./itemsToWatch.scss"

const ItemsToWatch = () => {
    return (
        <div className="items-watch section-spacing">
            <div className="container">
                <div className="mb-5">
                    <h1 className="text-center section-title">Items To Watch Out For</h1>
                    <div className="section-title-underline"></div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-6 mar-bot">
                        <div className="item-wrapper">
                            <div className="item-image" style={{width: "50%"}}>
                            </div>

                            <div className="item-description" style={{width: "50%"}}>
                                <h4 className="mb-3">Item Name</h4>

                                <p className="mb-4">A brief description as to why one has to watch out for this item</p>

                                <Buttons btnText="Learn More" btnType="secondary" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="item-wrapper">
                            <div className="item-image" style={{width: "50%"}}>
                            </div>

                            <div className="item-description" style={{width: "50%"}}>
                                <h4 className="mb-3">Item Name</h4>

                                <p className="mb-4">A brief description as to why one has to watch out for this item</p>

                                <Buttons btnText="Learn More" btnType="secondary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Buttons btnText="View All Items" btnType="primary" />
                </div>
            </div>
        </div>
    )
}

export default ItemsToWatch
