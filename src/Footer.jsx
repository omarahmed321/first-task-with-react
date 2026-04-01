import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import './index.css'







export default function Foot(){
    return(
        <footer className="d-flex flex-column  align-content-start">
            <div className="mainFoot d-flex mx-auto">
                          <div className="leftSide">
                <img src="./sources/whitelogo.png" alt="" />
                <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            </div>
            <div className="mid d-flex flex-column  justify-content-between ">
<p >Service</p>

<a href="" className=" text-decoration-none">Bonus program</a>
<a href="" className=" text-decoration-none">Gift cards</a>
<a href="" className=" text-decoration-none">Credit and payment</a>
<a href="" className=" text-decoration-none">Service contracts</a>
<a href="" className=" text-decoration-none">Non-cash account</a>
<a href="" className=" text-decoration-none">Payment</a>
            </div>
            <div className="rightSide flex-column d-flex justify-content-between">
<p >Assistance to the buyer</p>

<a href="" className=" text-decoration-none">Find an order</a>
<a href="" className=" text-decoration-none">Terms of delivery</a>
<a href="" className=" text-decoration-none">Exchange and return of goods</a>
<a href="" className=" text-decoration-none">Guarantee</a>
<a href="" className=" text-decoration-none">Frequently asked questions</a>
<a href="" className=" text-decoration-none">Terms of use of the site</a>
            </div>
            </div>
            <div className="icons d-flex justify-content-between">
                <img src="./sources/x.png" alt="" />
                <img src="./sources/face.png" alt="" />
                <img src="./sources/tiktok.png" alt="" />
                <img src="./sources/insta.png" alt="" />
            </div>
  
        </footer>
    )
}