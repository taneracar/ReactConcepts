import React from "react";
import styles from "./product-item.module.css";

function ButtonComponent() {
  return <button className={styles.buttonStyle}>Click</button>;
}

const ProductItem = ({ singleProduct, key }) => {
  return (
    <div
      style={{ padding: "20px", marginBottom: "5px", border: "2px solid red" }}
      key={key}
    >
      <p className={styles.productTitle}>{singleProduct}</p>
      <ButtonComponent />
    </div>
  );
};

export default ProductItem;
