import React from 'react'
import products  from "../datasourcwe/products";

    

function HomeScreen() {


  return (
    <div className='produt'>
    <div className='firsttrow'>
    <div className='Card'>
    <h2>Quality Iphones</h2>sss
    <div>
    style={{
      display:"grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      maxwidth:"20pxauto",
    }}
    {products.map((products) => (
      <div>
      style={{
        display: "flex",
        justifycontent:"center",
        flexdirection: "column",
        border:"1px solid #dedede",
        marin: "10x",
        padding: "10x",
      }}
      <img src={products.image} height="2500"  />
      <h5>{products.image}</h5>
      <h5>{products.name}</h5>
      <h5>GH₵{products.price.toFixed(2)}</h5>
    
      </div>
  ))}
    </div>

    </div>
    </div>
    
    </div>
  );
}

  

export default HomeScreen;

