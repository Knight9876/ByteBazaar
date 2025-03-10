// src/components/ProductImage.jsx
import React from 'react';

const ProductImage = ({ image, alt }) => (
  <div className="flex justify-center items-center">
    <img src={image} alt={alt} className="w-[500px] h-[500px] object-contain rounded-lg" loading='lazy' />
  </div>
);

export default ProductImage;
