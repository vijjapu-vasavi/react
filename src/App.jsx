import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchasHistory from "./PurchasHistory";
import Veg from "./Veg";
import { useSelector } from "react-redux";
import "./App.css";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";

 function App(){
  const cart =useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  return(
    <>
    <GoogleOAuthProvider clientId="632389844593-v8v94rigqcqqll22mcnug58e1pvrflhk.apps.googleusercontent.com">
    <GoogleLoginComponent/>
    </GoogleOAuthProvider>
    <BrowserRouter>
    <nav>
    <Link to="home">Home</Link>
    <Link to="veg">veg</Link>
    <Link to="nonveg">nonveg</Link>
    <Link to="cart">cart{totalItems}</Link>
    <Link to="purchashistory">purchashistory</Link>
    <Link to="aboutus">aboutus</Link>
    <Link to="contactus">contactus</Link>
    </nav>
    
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="veg" element={<Veg/>}/>
      <Route path="nonveg" element={<NonVeg/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="purchashistory" element={<PurchasHistory/>}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      <Route path="contactus" element={<ContactUs/>}/>


    </Routes>

    
      
    </BrowserRouter>
    
    </>
  )
 } 
 export default App   