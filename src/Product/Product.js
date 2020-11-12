import React, { Component } from "react";

class Product extends Component {
  productData = [];

  componentDidMount() {
    const url =
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.productData = data;
        console.log("Data: ", this.productData);
      });
  }

  render() {
    return (
      <div>
        <p>
          {this.productData.map(p => {
            <li>{p.id}</li>;
          })}
        </p>
      </div>
    );
  }
}

export default Product;
