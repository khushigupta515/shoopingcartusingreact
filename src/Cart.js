import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    render(){
        return(
            <div>
                <h1>Cart</h1>
                <CartItem/>
                <CartItem/>
                <CartItem/>

            </div>


        );}

}
export default Cart;