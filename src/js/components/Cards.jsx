import Card from "./Card"

function Cards () {
    return(
        <>
        <div className="row m-auto justify-content-between" style={{width: "70%"}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        </>
    )
}


export default Cards