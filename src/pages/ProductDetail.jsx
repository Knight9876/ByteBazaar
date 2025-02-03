// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import PurchaseOptions from "../components/PurchaseOptions";
import ProductDetailReviews from "../components/ProductDetailReviews";
import RelatedProducts from "../components/RelatedProducts";
import { useCartContext } from "../context/CartContext";
import cigaretteData from "../utils/cigaretteData";
import ProductNotFound from "../components/ProductNotFound";

const ProductDetail = () => {
  const { productName } = useParams();
  const { addToCart } = useCartContext();

  const product = cigaretteData
    .flatMap((category) => category.cigarettes)
    .find((cigarette) => cigarette.name === productName);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  if (!product) {
    return <ProductNotFound />;
  }

  // Find related products within the same category except the current product
  const relatedProducts =
    cigaretteData
      .find((category) =>
        category.cigarettes.some((cigarette) => cigarette.name === product.name)
      )
      ?.cigarettes.filter((cigarette) => cigarette.name !== product.name) || [];

  const handleQuantityChange = (cigarette, newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleRelatedAddToCart = (cigarette) => {
    addToCart({ ...cigarette, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center mt-16 font-bold text-red-700">
        <p>
          This product contains nicotine, a highly addictive substance. Smoking
          can cause serious health issues. Please consume responsibly.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-8 mb-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <ProductImage image={product.image} alt={product.name} />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between">
            <ProductInfo product={product} />
            <PurchaseOptions
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
        <ProductDetailReviews />
      </div>
      {relatedProducts.length > 0 && (
        <RelatedProducts
          relatedProducts={relatedProducts}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleRelatedAddToCart}
        />
      )}
    </div>
  );
};

export default ProductDetail;
