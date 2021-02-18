import "./button.scss"

const button = ({btnType, btnText}) => {
    return (
        <>
            <button className={`mdg-btn ${btnType}`}>{btnText}</button>
        </>
    )
}

button.defaultProps = {
    btnType: "primary",
    btnText: "MDG Button"
}

export default button
