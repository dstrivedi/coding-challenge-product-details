import React, { Component } from "react";
import Product from "../Product/Product.js";

import styles from "./product.module.css";

class Products extends Component {
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
        <Product product={this.state.productData} />
      </div>
    );
  }
}

export default Products;
