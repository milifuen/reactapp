export default function Button({ text, type, onTouch}) {
    const btnStyle = {
        backgroundColor: type === "alert" ? "red": "crimson",
        color: "white",
        border: 0,
        padding: "10px",
        borderRadius: "15px",
        margin : "10px"

    }
    return (
        <button onClick={onTouch} style={btnStyle} className="btn" >{text}</button>
    )
}