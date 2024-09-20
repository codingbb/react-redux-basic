// import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import DisplayCount from "./components/DisplayCount";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Root</h1>
      {/* 이제 컴포넌트를 바로 불러오면 됨! */}
      <Counter></Counter>
      <DisplayCount></DisplayCount>
    </div>
  );
}

export default App;
