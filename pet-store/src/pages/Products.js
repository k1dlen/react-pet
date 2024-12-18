import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient.js";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("Products").select("*");

      if (error) {
        console.error("Ошибка получения данных", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img
            src={product.image_product}
            alt={product.name_product}
            style={{ width: "260px", height: "150px" }}
          />
          <div className="card-body">
            <div className="card-body-text">
              <h2>{product.name_product}</h2>
              <p>{product.description}</p>
              <p>Цена: {product.price} руб.</p>
              <p>В наличии: {product.quantity} шт.</p>
            </div>
            <div className="btn center">
              <Link to={`/Products/${product.id}`} state={{ product }}>
                <button>Подробнее</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className="container">
    //     <ul style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
    //         {products.map((product) => (
    //             <li className="card" key={product.id} style={{display:'flex', alignItems:'center', flexDirection: 'column'}} >
    //                 <img src={product.image_product} alt='product.name' style={{width: '260px', height:'150px'}}></img>
    //                 <div className="card-body">
    //                     <h2>{product.name_product}</h2>
    //                     <p>{product.description}</p>
    //                     <p>Цена: {product.price} руб.</p>
    //                     <p>В наличии: {product.quantity} шт.</p>
    //                     <div className='btn center'>
    //                         <button type="submit">Добавить в корзину</button>
    //                     </div>
    //                 </div>
    //             </li>
    //         ))}
    //     </ul>
    // </div>
  );
};

export default Products;
