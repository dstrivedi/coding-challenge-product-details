import React from "react";
import productStyles from "./product.module.css";

const Product = props => {
  return (
    <div className={productStyles.details}>
      {props.product.map(p => {
        return (
          <div className={productStyles.product}>
            <a
              style={{
                color: "black",
                textDecoration: "none",
                position: "absolute",
                fontWeight: "bold",
                maxWidth: "100%",
                width: "130vh",
                backgroundColor: "white",
                opacity: "0.5"
              }}
              href={p.links.www}
              target="_blank"
            >
              <p>{p.name}</p>
            </a>
            <img style={{ width: "100%", height: "100%" }} src={p.hero.href} />
            <p
              style={{
                position: "absolute",
                marginTop: "-50px",
                marginLeft: "20px",
                padding: "5px",
                backgroundColor: "black",
                color: "white",
                opacity: "0.6"
              }}
            >
              $799
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
