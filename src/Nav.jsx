

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './index.css'


export default function Nav(){
    return (
        <div className="w-100 navBar  d-flex align-items-center justify-content-between">
            <img src="./sources/image.png" alt="" />
           
         <div className="input position-relative d-flex align-items-center">
            <input type="text" placeholder="Search" />
            <img src="./sources/search.png" alt="" className="position-absolute" />
         </div>
            <div className="links d-flex justify-content-between align-items-center">
                <a href="#" className="text-black text-decoration-none">Home</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
                <a href="#">Blog</a>
            </div>
            <div className="icons d-flex justify-content-center align-items-center">
               <a href=""><img src="./sources/heart.png" alt="" /></a> 
             <a href=""><img src="./sources/cart.png" alt="" /></a>
             <a href="">   <img src="./sources/person.png" alt="" /></a>
            </div>
        </div>
    )
}