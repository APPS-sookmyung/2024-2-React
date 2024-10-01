import Product from "./components/Product";
import { dummy } from "./ProductDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Product
              name={item.name}
              img_path={item.img_path}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
