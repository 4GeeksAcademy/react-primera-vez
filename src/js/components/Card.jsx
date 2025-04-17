function Card() {
    return (
        <>
            <div className="card" style={{ width: "15rem", borderRadius: "0", paddingLeft: "0", paddingRight: "0"}}>
                <div style={{width: "100%", height: "200px", backgroundColor: "grey"}}> 
                    <img src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/543ffbf9-209a-4762-9649-f0005cfa28c1/240404+-+175608+-+001.jpg" className="card-img-top m-0 p-0" style={{borderRadius: "0"}} alt="..." />
                </div>
                <div className="card-body" style={{paddingLeft: "0", paddingRight: "0", paddingBottom: "0"}}>
                    <h5 className="card-title mt-5" style={{textAlign: "center"}}>Card title</h5>
                    <p className="card-text" style={{textAlign: "center", paddingLeft: "5px", paddingRight: "5px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores hic tempora explicabo ab saepe vero non.</p>
                    <div style={{width: "100%", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderTop: "solid 1px lightgrey", backgroundColor: "rgb(235, 235, 235)"}}><a href="#" className="btn btn-primary">Find Out More!</a></div>
                </div>
            </div>
        </>
    )
}


export default Card