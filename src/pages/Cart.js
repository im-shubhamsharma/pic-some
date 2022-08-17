import React, { useContext } from "react";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder(event){
     event.target.textContent = "Ordering..."
     setTimeout(()=>{
          event.target.textContent = "Order Succesfully Placed";
          setTimeout(()=>{
             setCartItems([]);
          },3000)     
     },3000)  
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItems.length > 0 && <div className="order-button">
        <button onClick={placeOrder}>Place Order</button>
      </div>}
    </main>
  );
}

export default Cart;
