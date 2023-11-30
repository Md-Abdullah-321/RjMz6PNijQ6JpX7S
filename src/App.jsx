import { Route, Routes } from "react-router-dom";
import BMICalculator from "./BMICalculator";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculate-bmi" element={<BMICalculator />} />
    </Routes>
  );
}

export default App;
