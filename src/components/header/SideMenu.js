import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaArrowLeft} from "react-icons/fa"
import Links from "../styleguide/links/Links"
import Buttons from "../styleguide/buttons/Button"
import "./sideMenu.scss"

const SideMenu = () => {
    const sideMenuClicked = () => {
        document.getElementById("sideMenu").classList.toggle("show");
    }

    return (
        <>
            <div className="side-menu-btn">
                <AiOutlineMenu onClick={sideMenuClicked} />
            </div>

            <div className="side-menu-wrapper" id="sideMenu">
                <div className="side-menu">
                    <div className="hide">
                        <FaArrowLeft onClick={sideMenuClicked} />
                    </div>

                    <div>
                        <Links text="Updated Guides" />
                        <Links text="Heroes For Beginners" />
                        <Links text="All Heroes Guides" />
                        <Links text="Items" />
                        <Links text="Blogs" />
                    </div>

                    <div className="buttons-wrapper">
                        <Buttons btnType="primary" btnText="Login" />
                        <div style={{width: "0.5rem", display: "inline-block"}}></div>
                        <Buttons btnType="secondary" btnText="Signup" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu
