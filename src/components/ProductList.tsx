// ProductList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <Link to={`/product/${product.id}`} className="product-link">
            <div className="product-image-container">
              <img src={product.imageUrl} alt={product.name} className="product-image1" />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
