function Footer() {
    return (
        <div style={{ height: "80px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", backgroundColor: "rgb(65, 65, 65)" }}>
            <p style={{ color: "white" }}>Copyright &copy; Your Website {new Date().getFullYear()}</p>
        </div>
    )
}


export default Footer