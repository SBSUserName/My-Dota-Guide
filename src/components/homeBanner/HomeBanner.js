import Buttons from "../styleguide/buttons/Button"
import Card from "../styleguide/cards/Card"
import "./homeBanner.scss"

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <div className="content-container">
                <h2 className="text-center mb-5">
                    The guides here will help you DOTA in a simple but effective way. Focused on fun play 
                    rather than serious competetive way but you will eventually start playing awesomely 
                    because<br /> 
                    <span><b>YOU ARE AWESOME!</b></span>
                </h2>

                <div className="buttons-wrapper">
                    <Buttons btnType="primary" btnText="Updated Guides" />
                    <div style={{width: "1rem", display: "inline-block"}}></div>
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
