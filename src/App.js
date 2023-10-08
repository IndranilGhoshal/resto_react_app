import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import './App.css'
import Header from "./component/user/Header";
import BillDashboard from "./component/user/BillDashboard";
import 'react-notifications/lib/notifications.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Header />}>
            <Route index element={<BillDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
