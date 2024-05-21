import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants/ProductsJson';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // Get the productId from the URL params

  const product = PRODUCTS.find(product => product.id === productId);
  if (!product) {
    return <div className="product-details">Product not found</div>; // Render a message if the product is not found
  }
console.log(product.imageUrl,"product.imageUrl")
  return (
    <div className="product-details-container">
      <div  >
      <img src={"/"+product.imageUrl} style={{width:200, height:200}}/>
      </div>
      <div className="product-details-info">
        <h2 className="text-medium">{product.name}</h2>
        <p className="text-base">Price: ${product.price}</p>
        <p className="text-base">Size: {product.size}</p>
        <p className="text-base">Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
