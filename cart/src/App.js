import React from "react";
import Cart from "./Cart";
// import React from "react";
import Navbar from "./Navbar";
class App extends React.Component{

  constructor (){
    super();
    this.state={
        products:[
            {
                title:'Watch',
                price:99,
                qty:0,
                img:'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
                id:1
            },
            {
                title:'Mobile Phone',
                price:999,
                qty:0,
                img:'https://images.unsplash.com/photo-1619017098958-57b1e2d275e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
                id:2
            },
            {
                title:'Laptop',
                price:2999,
                qty:0,
                img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
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
handleDeleteProducts=(id)=>{
    const {products} = this.state;
    const items = products.filter((item)=>item.id!==id);//{[]}
    this.setState({
        products:items
    })
}
getCountCart =()=>{
  const {products}=this.state;
  let count =0;
  products.forEach((product) => {
    count+=product.qty;
  });
  return count;
}
getCartTotal =()=>{
  const {products} =this.state;
  let CartTotal =0;
  products.map((product)=>{
        CartTotal = CartTotal + product.qty * product.price;
  });
  return CartTotal;
}
  render(){
    const {products} =this.state;
    return (
    <div className="App">
       <Navbar
       count={this.getCountCart()}
       />
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProducts}
      />
     <div style={{padding:10,fontSize:20}}>
       TOTAL: {this.getCartTotal()}
     </div>
    </div>
    );
  }
}

export default App;
