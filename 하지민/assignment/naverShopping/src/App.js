import Product from "./components/Product";
import { dummy } from "./productDummy";

function App() {
  return (
    <div className="app-container">
      <div className="hot-deal-title">
        <h2>초특가 핫딜</h2>
        <p>🔥 오늘 단 하루! 🔥</p>
        <p>멤버십 고객 대상 20% 쿠폰 선착순 발급</p>
      </div>
      <div className="products-grid">
        {dummy.map((item) => (
          <Product key={item.title} title={item.title} price={item.price} discount_rate={item.discount_rate} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
