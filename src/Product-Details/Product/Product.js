import React from "react";
import productStyles from "./product.module.css";

const Product = props => {
  return (
    <div className={productStyles.details}>
      {props.product.map(p => {
        return (
          <div className={productStyles.product}>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href={p.links.www}
              target="_blank"
            >
              <p>{p.name}</p>
            </a>
            <img
              style={{ maxWidth: "100%", height: "100%" }}
              src={p.hero.href}
            />
            <p>$</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
