import Buttons from "../styleguide/buttons/Button"
import Card from "../styleguide/cards/Card"
import "./homeBanner.scss"

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div className="content-container">
                <h1 className="mb-5 text-center larger-than-mobile-message">
                    <span>Simple</span> yet <span>Effective</span><br/>
                    <span>Fun Play</span> rather than serious competetiveness<br />
                    But you will eventually start playing like a pro because<br />
                    <span>YOU ARE AWESOME!</span>
                </h1>

                <h1 className="mobile-message">
                    <span>Simple</span> yet <span>Effective</span><br/>
                    <span>Fun Play</span>
                </h1>

                <div className="buttons-wrapper">
                    <Buttons btnType="primary" btnText="Updated Guides" />
                    <div className="spacing"></div>
                    <Buttons btnType="secondary" btnText="All Heroes" />
                </div>
            </div>
            
            {/* <div className="row">
                <div className="col">
                    <Card 
                        cardTitle="Heores For Beginners" 
                        cardDescription="Learning Dota 2 can be tough. So, get started with basic straight forward heroes to get better 
                                        understanding of the game's mechanism."
                        btnExistance={true}
                        btnType="primary"
                        btnText="View Heroes" 
                    />
                </div>

                <div className="col">
                    <Card 
                        cardTitle="All Heroes" 
                        cardDescription="Learn to play all heroes here."
                        btnExistance={true}
                        btnType="primary"
                        btnText="View Heroes" 
                    />    
                </div>

                <div className="col">
                    <Card 
                        cardTitle="Items" 
                        cardDescription="Learning all the items in Dota 2 is not difficult. Its fun!. Check out by clicking the button below
                                        and find out for yourself."
                        btnExistance={true}
                        btnType="primary"
                        btnText="View Items" 
                    />
                </div>
            </div> */}
        </div>
    )
}

export default HomeBanner
