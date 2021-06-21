import React from 'react';

class CartItem extends React.Component{
    render(){
        return(

            <div className="cartitem">
                <div className= "leftleft" style={{display:'inline-block',width:'15%'}}>
                    <i className="fa fa-car" style={{fontSize:65,color:'grey'}}></i>
                </div>
                <div className="leftright" style={{display:'inline-block',width:'25%'}}>
                    Pineapple
                    <p>Medium</p>
                    <button id="decrease" style={{background: '#DC381F'}}>-</button>
                    <button id="count" style={{background: '#BDB76B'}}>1</button>
                    <button id="increase" style={{background: '#3CB371'}}>+</button>
                </div>
                <div className="right" style={{display:'inline-block',width:'50%',textAlign: 'right'}}>
                    rs 25
                </div>
            </div>
        );
    }
}
export default CartItem;