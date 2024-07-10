import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import React,{useState} from 'react';
import Footer from "./components/Footer.js";
import Additem from './components/Additem.js';

function App() {
   const productList = [
    {
      price:99999,
      name:"IPhone 10S Max",
      quantity:0,
    },
    {
      price:9999,
      name:"Readmi Note 10S Max",
      quantity:0,
    }
  ]
  let [productLists, setProductList] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList=[...productLists];
    let newTotalAmount=totalAmount;
    newProductList[index].quantity++;
    newTotalAmount +=newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const decrementQuantity = (index) => {
    let newProductList=[...productLists];
    let newTotalAmount=totalAmount;
    if(newProductList[index].quantity > 0) 
      { newProductList[index].quantity--;
        newTotalAmount -=newProductList[index].price;
      }
      setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetQuantity=()=>{
    let newProductList=[...productLists];
    newProductList.map((products)=>{
      products.quantity=0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem =(index) =>{
    let newProductList=[...productLists];
    let newTotalAmount=totalAmount;
    newTotalAmount -=newProductList[index].quantity * newProductList[index].price;

    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem=(name,price)=>{
    let newProductList=[...productLists];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
      <Additem addItem={addItem}/>
    <ProductList productList={productLists} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
    </main>
    
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
