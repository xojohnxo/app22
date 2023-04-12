import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import React, { useState  } from 'react';
import { Navigate } from 'react-router-dom/dist';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (username, password) => {

    setIsLoggedIn(true); }



  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element= {isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/home" element= {isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/login" element={isLoggedIn ? <Home /> : <Navigate to="/"/>} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;