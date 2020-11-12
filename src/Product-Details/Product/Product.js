import React from "react";
import productStyles from "./product.module.css";

const Product = props => {
  return (
    <div>
      {props.product.map(p => {
        return (
          <div className={productStyles.details}>
            <a
              // style={{ color: "black", textDecoration: "none" }}
              href={p.links.www}
              target="_blank"
            >
              <p>{p.name}</p>
            </a>
            <img src={p.hero.href} />
            <p>$</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
