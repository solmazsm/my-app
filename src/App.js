import React,{useState,useEffect} from 'react';
import './App.css';
import Data  from "./data.json";

const loadData = () => JSON.parse(JSON.stringify(Data));
function App() {
  
  
    return (
      <div className="App">
        <div className="posts">{
Data.map(post =>{
  return(
    <div key={post.id}>
      <p><img  src={post.image} style={{position: 'absolute',
     	left: '70px',
            width: '200px',
            height: '230px',
            objectFit: 'scale-down',
            }} /></p><h3 style={{
     	
              position: 'absolute',
      left: '120px',
      top: '200px',
      
              }}  >{post.title}</h3>
              
              <pre > {post.subtitle}</pre>


{post.sales.map( data1 => {
  return(
     <div id="example_6">  <table key={post.id}>
       <tr><th>weekEnding</th>
       <th>retailSales</th>
       <th>wholesaleSales</th>
       <th>unitsSold</th>
       <th>retailerMargin</th>
       </tr>
      <tr>
      <th> {data1.weekEnding}</th>
      <th>${data1.retailSales}</th> 
    <th>${data1.wholesaleSales}</th>
    <th>{data1.unitsSold}</th>
       <th>${data1.retailerMargin}</th>
    </tr></table>
    </div>
    
  )

  
}





)}


    </div>
    
  )})}
        </div>
      
     </div>
    );
    
}

export default App;