import { useDispatch, useSelector } from "react-redux"
import { decrement, increament, remove } from "./store"
import { useState } from "react"

function Cart()
{ 
    //couponcode
const [couponCode,setCouponCode]=useState("")
const [couponDiscount,setCouponDiscount]=useState(0)
const handleCoupon=()=>{
    switch(couponCode){
        case "Ratan10":
            setCouponDiscount(10);
            break;
        case "Ratan20":
            setCouponDiscount(20);
            break;
        case "Ratan30":
            setCouponDiscount(30);
            break;
        default:
            alert("invalid coupon code");
            setCouponDiscount(0);
            break;
    }
}


const dispatch=useDispatch()
const cartDetails=useSelector(state=>state.cart)
const items=cartDetails.map((product,index)=>
    <li key={index}>
       {product.name}-${product.price} 
       <button onClick={()=>dispatch(increament({name:product.name}))}>+</button> 
       <button onClick={()=>dispatch(decrement({name:product.name}))}>-</button> 
        <button onClick={()=>dispatch(remove(product))}>remove</button>   
       quantity:{ product.quantity} 
        
       </li>
       
)


//discount
const [dpAmount,setdpAmount]=useState(0);
const handleDiscount=(dvalue)=>{
    setdpAmount(dvalue);
}
const calculateTotal=()=>{
    let total=cartDetails.reduce((sum,items)=>sum+(items.price*items.quantity),0);
    let discount=total*(dpAmount)/100;
    let discoupon=total*(couponDiscount)/100;
    let netAmount=total-discount-discoupon;
    
    return{
        total:parseFloat(total.toFixed(2)),
        discount:parseFloat(discount.toFixed(2)),
        discoupon:parseFloat(discoupon.toFixed(2)),
        netAmount:parseFloat(netAmount.toFixed(2))
    }

}
const {total,discount, discoupon,netAmount}=calculateTotal()

    return(
        <>
        <h1>cart details</h1>
        {cartDetails.length===0?(
            <p>your cart is empty</p>
        ):(<>
        <ul>{items}</ul>

        <h1>apply discount</h1>

        <p>Total before discount:${total}</p>
        <button onClick={()=>handleDiscount(10)}>10%</button>
        <button onClick={()=>handleDiscount(20)}>20%</button>
        <button onClick={()=>handleDiscount(30)}>30%</button>
       <p>discount percentage applied:${dpAmount}</p>
       <p>discount amount:${discount}</p>
       <p>coupon amount:${discoupon}</p>
       <p>total amount:${netAmount}</p>
       <input type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder="enter the coupon code"></input>
       <button onClick={handleCoupon}>apply coupon</button>
        </>
        )}
        </>
    )





}
export default Cart