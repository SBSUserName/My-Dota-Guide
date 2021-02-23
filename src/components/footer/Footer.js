import Links from "../styleguide/links/Links"
import "./footer.scss"

const Footer = () => {
    return (
        <>
        {/* <div className="footer">
            <div className="container">
                <div className="logo">
                    <a href="https://fontmeme.com/fancy-fonts/">
                        <img src="https://fontmeme.com/permalink/210217/5cd92e44a4ef72dc75053ada2186ae5b.png" alt="fancy-fonts" border="0" />
                    </a>
                </div>

                <div className="links-wrapper">
                    <Links text="Update Guides" />
                    <Links text="Heroes For Beginners" />
                    <Links text="All Heroes Guides" />
                    <Links text="Items" />
                    <Links text="Blogs" />
                </div>
            </div>
        </div> */}

        <div className="copyright">
            Copyright 2021, MAN585 My Dota Guide
        </div>
        </>
    )
}

export default Footer
