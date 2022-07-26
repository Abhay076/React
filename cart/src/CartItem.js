import React from "react";
class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'grey'}}>Rs 400</div>
                    <div style={{color:'grey'}}>Qty 1</div>
                    <div className="cart-item-actions">

                         <div className="action-icon">

                         </div>
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