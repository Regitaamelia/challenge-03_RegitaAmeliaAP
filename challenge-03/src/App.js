import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TabelList from "./pages/TabelList";
import List from "./pages/List";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/" element={<TabelList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
