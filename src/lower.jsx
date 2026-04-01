
import Product from "./product"




export default function Lower(){
    return(
        <div className="lower">
            <h3>Related Products</h3>
<div className="products d-flex justify-content-between">
    <Product />
    <Product />
    <Product />
    <Product />
</div>
        </div>
    )
}