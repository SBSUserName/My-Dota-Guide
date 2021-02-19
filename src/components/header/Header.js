import Links from "../styleguide/links/Links"
import Buttons from "../styleguide/buttons/Button"
import Logo from "../../assets/images/demo-logo.png"
import "./header.scss"

const Header = () => {
    return (
        <div className="mdg-header">
            <div className="logo-div">
                {/* <img src={Logo} alt="mdg logo" /> */}
                <a href="https://fontmeme.com/fancy-fonts/">
                    <img src="https://fontmeme.com/permalink/210217/5cd92e44a4ef72dc75053ada2186ae5b.png" alt="fancy-fonts" border="0" />
                </a>
            </div>

            <div className="quick-links">
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
    )
}

export default Header
