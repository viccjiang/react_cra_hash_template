import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <p>TEST</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
