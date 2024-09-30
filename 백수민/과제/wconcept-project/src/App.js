import React from 'react'
import Product from './components/Product'
import { dummy } from './productDummy';

function App() {
  return (
    <div>
      <div className="app-container">
        {
          dummy.products.map((item) => {
            return (
              <Product 
                key={item.id}
                img_path={item.img_path}
                brand_name={item.brand_name}
                product_name={item.product_name}
                price={item.price}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
