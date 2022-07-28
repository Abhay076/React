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
    </div>
    );
  }
}

export default App;
