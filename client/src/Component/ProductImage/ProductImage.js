import React from "react";
import "./ProductImage.css";

const ProductImage = props => 

<div>
<img class="productImage" id={props.id} src={props.children}/>
</div>

export default ProductImage;