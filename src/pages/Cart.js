import React, {useState, useContext, useRef } from "react";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";
import Confetti from "../components/Confetti";

function Cart() {
  const { cartItems, setCartItems, orderStatus, setOrderStatus } =
    useContext(Context);

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const cartHeading = useRef();
  
  function placeOrder(){
    cartHeading.current.textContent = "Ordering....";
     setTimeout(()=>{
       cartHeading.current.textContent = "Order Succesfully Placed";
       setCartItems([]);  
       setOrderStatus(true);
        
       setTimeout(()=>{
        setOrderStatus(false);
       }, 15000)

     },3000)  
  }

  return (
    <main className="cart-page">
      {orderStatus && <Confetti/>}
      <h1 ref={cartHeading}>Check out</h1>
      {cartItemElements}
      {orderStatus === false && <p className="total-cost">Total: {totalCostDisplay}</p>}
      {cartItems.length > 0 && (
        <div className="order-button">
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </main>
  );
}

export default Cart;
