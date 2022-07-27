import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor (){
        super();
        this.state={
            products:[
                {
                    title:'Watch',
                    price:99,
                    qty:2,
                    img:'',
                    id:1
                },
                {
                    title:'Mobile Phone',
                    price:999,
                    qty:5,
                    img:'',
                    id:2
                },
                {
                    title:'Laptop',
                    price:2999,
                    qty:10,
                    img:'',
                    id:3
                }
            ]
        }
    }
    render (){
        const {products} = this.state;
        return (
            <div className="cart">
               {products.map((product)=>{
                    return (
                    <CartItem 
                      product={product} 
                      key={product.id}
                    />
                    )
               })}
            </div>
        )
    }
}
export default Cart;