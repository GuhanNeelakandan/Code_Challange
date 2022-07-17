import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import History from "./Pages/History/History";
import HistoryDetails from "./Pages/History/HistoryDetails";
import Launch from "./Pages/Launches/Launch";
import LaunchDetails from "./Pages/Launches/LaunchDetails";
import Rockets from "./Pages/Rockets/Rockets";
import RocketDetails from "./Pages/Rockets/RocketDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/rocket" element={<Rockets />} />
        <Route path="/history/:id" element={<HistoryDetails />} />
        <Route path="/launch/:id" element={<LaunchDetails />} />
        <Route path="/rocket/:id" element={<RocketDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
