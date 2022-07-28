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
    handleIncreaseQuantity=(product)=>{
        console.log("hey increase the qty by 1", product);
        const {products} = this.state;
        const index = products.indexOf(product);


        products[index].qty += 1;

        this.setState({
            products
        });
    }
    handleDecreaseQuantity=(product)=>{
        console.log("hey decrease the qty by 1", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products
        })
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
                      onIncreaseQuantity={this.handleIncreaseQuantity}
                      onDecreaseQuantity={this.handleDecreaseQuantity}
                    />
                    )
               })}
            </div>
        )
    }
}
export default Cart;