import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import './App.css'
import Header from "./component/user/Header";
import BillDashboard from "./component/user/BillDashboard";
import 'react-notifications/lib/notifications.css';
import AddCategory from "./component/user/AddCategory";
import CategoryList from "./component/user/CategoryList";
import AddProduct from "./component/user/AddProduct";
import ProductList from "./component/user/ProductList";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Header />}>
            <Route index element={<BillDashboard />} />
            <Route exact path='/add-category' element={< AddCategory />} />
            <Route exact path='/category-list' element={< CategoryList />} />
            <Route exact path='/add-product' element={< AddProduct />} />
            <Route exact path='/product-list' element={< ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
