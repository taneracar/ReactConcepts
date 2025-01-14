import { useEffect, useState } from "react";
import React from "react";
import ProductItem from "./components/productItem";
import "./style.css";

const ProductList = ({ name, city, listOfProducts }) => {
  /* const { name, city } = props; */

  const flagg = true;
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function renderTextBlock(getFlag) {
    return flagg ? (
      <p>
        Name is {name}, he/she is blongs to {city}
      </p>
    ) : (
      <p>Hello World</p>
    );
  }

  function handleToggleText() {
    setFlag(!flag);
  }
  function handleIncreaseCount() {
    setCount(count + 1);
  }
  useEffect(() => {
    setFlag(!flag);
    return () =>{
      console.log("component is unmounted");
    }
  }, []); // empty array makes the effect run only once when page reloads
  useEffect(() => {
    count === 10 ? setChangeStyle(true) : setChangeStyle(false);
  }, [count]);

  return (
    <div>
      <h3 className="title">ECommerce Project</h3>
      <button onClick={handleToggleText}>Toggle Text</button>
      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}
      <div>
        <button
          style={{
            backgroundColor: changeStyle ? "black" : "white",
            color: changeStyle ? "white" : "black",
          }}
          onClick={handleIncreaseCount}
        >
          Increase Count
        </button>
        <p>Count is: {count}</p>
      </div>
      <ul>
        {listOfProducts.map((item, key) => (
          <ProductItem singleProduct={item} key={key} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
