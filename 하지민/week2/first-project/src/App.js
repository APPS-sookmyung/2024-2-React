import React from "react";
import ProductPage from "./pages/ProductPage";

function App() {
  // const Button = React.createElement("button", { className: "child-btn" }, "버튼");
  // const Wrapper = React.createElement("div", { className: "wrapper" }, Button);

  // return Wrapper;

  // 3.
  // const name = "Charles";
  // const fruits = ["apple", "banana", "orange"];

  return (
    // 1.
    // <div className="wrapper">
    //   <button className="child-btn">버튼</button>
    // </div>

    // 2.
    // <Fragment>
    //   <button>버튼1</button>
    //   <button>버튼2</button>
    // </Fragment>
    // <>
    //   <button>버튼1</button>
    //   <button>버튼2</button>
    // </>

    // 3.
    // <div>
    //   <button>{name}</button>
    //   <ul>
    //     {fruits.map((f) => (
    //       <li>{f}</li>
    //     ))}
    //   </ul>
    // </div>

    <div>
      <ProductPage />
    </div>
  );
}

export default App;
