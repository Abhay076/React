import React from "react";
import Cart from "./Cart";
// import React from "react";
import Navbar from "./Navbar";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import db from "./index";
import * as firebase from "firebase";
class App extends React.Component{

  constructor (){
    super();
    this.state={
        products:[],
        loading:true
    }
    this.db=firebase.firestore();
}

componentDidMount(){
    this.db
      .collection("products")
      // .get()

      .onSnapshot
      ((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products,
          loading:false
        });
      });
}
handleIncreaseQuantity=(product)=>{
    console.log("hey increase the qty by 1", product);
    const {products} = this.state;
    const index = products.indexOf(product);


    // products[index].qty += 1;

    // this.setState({
    //     products
    // });
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
        .update({
          qty:products[index].qty+1
        })
        .then(()=>{
          console.log('Updated Successfully')
        })
        .catch((err)=>{
          console.log('error',err);
        })
}
handleDecreaseQuantity=(product)=>{
    console.log("hey decrease the qty by 1", product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    const docRef = this.db.collection('products').doc(products[index].id);
        docRef
          .update({
            qty:products[index].qty-1
          })
          .then(()=>{
            console.log('products update successfully')
          })
          .catch((err)=>{
            console.log('error',err);
          })
    // products[index].qty -= 1;
    // this.setState({
    //     products
    // })
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

addProduct=()=>{
      this.db
         .collection('products')
         .add({
          img:'',
          price:900,
          qty:3,
          title:'Washing Machine'
         })
         .then((docRef)=>{
           console.log('Product has been Added', docRef);
         })
         .catch((err)=>{
           console.log('Error',err);
         })
}
  render(){
    const {products,loading} =this.state;
    return (
    <div className="App">
       <Navbar
       count={this.getCountCart()}
       />
       {/* <button onClick={this.addProduct}style={{padding:20,fontSize:20}}>Add a Product</button> */}
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProducts}
      />
      {loading && <h1>loading products...</h1>}
     <div style={{padding:10,fontSize:20}}>
       TOTAL: {this.getCartTotal()}
     </div>
    </div>
    );
  }
}

export default App;
