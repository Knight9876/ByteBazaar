// src/components/ProductImage.jsx
import React from 'react';

const ProductImage = ({ image, alt }) => (
  <div className="flex justify-center items-center">
    <img src={image} alt={alt} className="w-full h-full object-cover rounded-lg" />
  </div>
);

export default ProductImage;
