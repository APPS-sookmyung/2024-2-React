import React, { useState } from "react";

import Product from "./components/Product";
import { dummy } from "./ProductDummy";

function App() {
  // const Title = (props) => {
  //   return <h1>{props.children}</h1>;
  // };

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>마음에 드는 상품: {counter}개</h1>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <div>
              <Product
                name={item.name}
                img_path={item.img_path}
                price={item.price}
              />
              <button onClick={() => setCounter(counter + 1)}>💖</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
