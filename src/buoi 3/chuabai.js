import React from 'react'
const URL = "https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/iphone_16_pro_max_natural_titan_1875852ac7.png";

const ProductItem = () => {
  return (
    <div style={{background:"red",width:"350px"}}>
      <img style={{}} src ={URL} alt ="san pham"></img>
      <h2>Ip16</h2>
      <p>Giảm 16 tr</p>
      <p>229000</p>
    </div>
  )
}

export default ProductItem
