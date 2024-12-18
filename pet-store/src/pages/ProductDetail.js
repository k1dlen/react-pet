import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="container">
      <div className="product-detail">
        <img
          src={product.image_product}
          alt={product.name_product}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.name_product}</h1>
          <p className="product-detail-price">
            <strong>Цена:</strong> {product.price} руб.
          </p>
          <p className="product-detail-quantity">
            <strong>В наличии:</strong> {product.quantity} шт.
          </p>
          <p className="product-detail-description">
            <strong>Описание:</strong> {product.description}
          </p>
          <button className="btn add-to-cart">Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
