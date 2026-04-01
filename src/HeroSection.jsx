
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import './index.css'
import Upper from "./upper"
import Lower from "./lower"



export default function Hero(){
    return(
    <div className="HeroSection d-flex flex-column align-items-center">
         

<Upper />

<Lower />





    </div>

        
    
    )
}