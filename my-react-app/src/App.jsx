import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ajax} from "jquery"
import ProductCard from './comp/ProductCard'
function App() {
  const [data, setData] = useState(0)
  useEffect(()=>{
    ajax({
      url:"https://fakestoreapi.com/products",
      type:"GET",
      contentType:"application/json",
      success:(data)=>{
        console.log(data);
        setData(data)
      },
      error:(err)=>{
        console.error(err);
      }
    })
  },[])
  return (
    <div className="App">
    <h1>My Shopping App</h1>
    {data.length > 0 ? (
      <div className="product-list">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <p>Loading products...</p>
    )}
  </div>
  )
}

export default App
