import "./App.css";
import FunctionalComponent from "../components/functional-component";
import ProductList from "../components/products";
import Users from "../components/products/components/users";
import ContextButtonComponent from "../components/context-concept/button";
import ContextTextComponents from "../components/context-concept/text";
import UseReducerExample from "../use-reducer-example";
import Counter from "../components/Counter";
import FormComponent from "../components/form";
import LoginComponent from "../components/login";
import RegisterComponent from "../components/register";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <>
      <div>
        <h1>React JS Concepts</h1>
        {/* <FunctionalComponent />
        <ProductList
          name="Taner"
          city="istanbul"
          listOfProducts={dummyProductData}
        /> */}
        {/* <Users/> */}
        {/*  <ContextButtonComponent/>
        <ContextTextComponents/> */}
        {/*< UseReducerExample />
        <Counter/> */}
        {/* <FormComponent /> */}
        <div style={{ display: "flex", gap: "20px" }}>
          <LoginComponent />
          <RegisterComponent />
        </div>
      </div>
    </>
  );
}

export default App;
