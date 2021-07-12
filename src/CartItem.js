import React from 'react';

class CartItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: 'Burger',
            imgsrc:'https://image.flaticon.com/icons/png/128/3075/3075929.png',
            quantity: 1,
            price: 25

        }
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity(){
        console.log(this.state);
        this.setState((prevState)=>{
            return{
                quantity:prevState.quantity +1
            }
        });
    }
    decreaseQuantity(){
        //console.log(this.state.quantity);
        if(this.state.quantity === 0)
             return;
        this.setState((prevState)=>{
            return{
                quantity:prevState.quantity -1
            }
        });
    }
    render(){
        const { price,title,quantity,imgsrc }=this.state;
        return(

            <div className="cartitem">
                <div className= "leftleft" style={{display:'inline-block',width:'25%'}}>
                   <img src={imgsrc} alt="sandwich"></img>
                </div>
                <div className="leftright" style={{display:'inline-block',width:'25%'}}>
                    {title}
                     <p>Price :Rs {price}</p>
                    <button id="decrease" onClick={this.decreaseQuantity} style={{background: '#DC381F'}}>
                        <img src="https://image.flaticon.com/icons/png/128/56/56889.png" alt="minus"></img>
                    </button>
                    <button id="increase"  onClick={this.increaseQuantity} style={{background: '#3CB371'}}>
                        <img src="https://image.flaticon.com/icons/png/512/1237/1237946.png" alt="plus"></img>
                    </button>
                    <button id="delete" style={{background: '#BDB76B'}}>
                        <img src="https://image.flaticon.com/icons/png/128/1214/1214428.png" alt="Delete"></img>
                    </button>
                   
                </div>
                <div className="right" style={{display:'inline-block',width:'40%',textAlign: 'right'}}>
                   <p> Quantity: {quantity}</p>
                   <p> Total Price: {quantity*price}</p> 
                </div>
            </div>
        );
    }
}
export default CartItem;