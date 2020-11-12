import React, { Component } from "react";
import productStyles from "./product.module.css";

class Product extends Component {
  state = {
    productData: [],
    isError: false
  };

  componentDidMount() {
    const url =
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
    fetch(url)
      // We get the API response and receive data in JSON format...
      .then(res => res.json())
      // ...then we update the users state
      .then(data => {
        this.setState({ productData: data.groups });
        console.log("Data: ", this.state.productData);
      })
      .catch(error => this.setState({ isError: error }));
  }

  render() {
    return (
      <div>
        <p>
          {this.state.productData.map(p => {
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
        </p>
      </div>
    );
  }
}

export default Product;
