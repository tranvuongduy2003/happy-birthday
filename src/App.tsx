import "./App.css";
import { Candle } from "./components/candle/Candler";

function App() {
  return (
    <div className="main">
      <img src="an1.jpg" alt="" className="image1" />
      <img src="an2.jpg" alt="" className="image2" />
      <div className="heading">
        <h1>Chúc mừng sinh nhật Annh Ngọc 🎉🎉🎉</h1>
      </div>
      <div className="cake">
        <div className="candle-line">
          <Candle />
          <Candle />
          <Candle />
        </div>
        <div className="under"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default App;
