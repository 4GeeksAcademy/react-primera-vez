function NavBar() {
    return (
        <>
            <ul className="nav justify-content-between" style={{ backgroundColor: "rgb(65, 65, 65)" }}>
                <div style={{ marginLeft: "225px" }}>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" style={{color: "white"}}>Start Bootstrap</a>
                    </li>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: "225px" }}>
                    <li className="nav-item" >
                        <a className="nav-link" href="#" style={{color: "white"}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: "white"}}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true" style={{color: "lightgrey"}}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true" style={{color: "lightgrey"}}>Contact</a>
                    </li>
                </div>
            </ul>
        </>
    )
}


export default NavBar