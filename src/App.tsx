import "./App.css";
import { Candle } from "./components/candle/Candler";

function App() {
  return (
    <div className="main">
      <div className="heading">
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginInline: "auto",
          }}
        >
          Chúc mừng sinh nhật công chúa Annh Ngọc 🎉🎉🎉
        </h1>
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
