import React from "react";
class CartItem extends React.Component{
    constructor (){
        super();
        this.state={
            title:'Mobile Phone',
            price:199,
            qty:1
        }
    }
    render(){
        const {title, price, qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'grey'}}>Rs {price}</div>
                    <div style={{color:'grey'}}>Qty {qty}</div>
                    <div className="cart-item-actions">
                             {/* buttons */}
                       <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                       <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                       <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"/>

                    </div>
                </div>

            </div>
        )
    }
    
}

const styles={

    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:"#FF0000" 
    }
}
export default CartItem;