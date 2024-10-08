import Card from "./components/Card";
import { dummy } from "./cardDummy";

function App() {
  return (
    <div className="section">
      <div className="section-header">
        <h2 className="typography-section-headline">알면 알수록, Mac.</h2>
      </div>
      <div className="gallery">
        <div className="scroll-container">
          <div className="item-container">
            <ul className="card-set">
              {dummy.map((item) => {
                return (
                  <Card
                    id={item.id}
                    label={item.label}
                    headline={item.headline}
                    img_path={item.img_path}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

