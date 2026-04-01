export default function Upper(){
    return(
   <div className="upper d-flex justify-content-center">
            <img src="./sources/iphone.png" alt="" className="iphonePng"  />



            <aside className="d-flex flex-column">
                <h1>Apple iPhone 14 Pro Max</h1>
                <div className="prices d-flex flex-row align-items-center">
                <p id="p1">$1399</p>
                <p id="p2">$1499</p>
                </div>
                <p className="description">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras</p>
                 <div className="buttons d-flex flex-row">
                    <button className="whiteBtn">Add To Wishlist</button>
                    <button className="blackBtn" style={{marginLeft:"16px"}}>Add To Cart</button>
                </div>




            <div className="details d-flex flex-row justify-content-between">
                <img src="./sources/icon1.png" alt="" />
                <img src="./sources/icon2.png" alt="" />
                <img src="./sources/icon3.png" alt="" />
            </div>

            </aside>



            </div>
    )
}