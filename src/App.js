import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
