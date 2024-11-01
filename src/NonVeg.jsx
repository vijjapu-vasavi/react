import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./store";

function NonVeg(){
    const dispatch=useDispatch();
    const nonVegProducts=useSelector(state=>state.products.nonVeg)
    const items=nonVegProducts.map((product,index) =>
        <li key={index}>
            {product.name}-${product.price.toFixed(2)}
            <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </li>
    )
    return(
        <>
        <h1>NonVeg</h1>
        <ul>
            {items}
        </ul>
        </>
    )
}
export default NonVeg