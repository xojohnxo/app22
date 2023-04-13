import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom/dist';
import PrivateRoutes from './PrivateRoutes';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
      console.log("Logged in");
      setIsLoggedIn(true);
    }



  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
    
            <Route path="/" element= {isLoggedIn ? <Navigate to='/home'/> : <Navigate to='/login'/>} />
            <Route path="/home" element= {<PrivateRoutes isLoggedin={isLoggedIn}> <Home/> </PrivateRoutes>}/>
            <Route path="/users" element={<PrivateRoutes isLoggedin={isLoggedIn}> <UserList/> </PrivateRoutes>} />
            <Route path="/user/:userId" element={<PrivateRoutes isLoggedin={isLoggedIn}> <User/> </PrivateRoutes>} />
            <Route path="/newUser" element={<PrivateRoutes isLoggedin={isLoggedIn}> <NewUser/> </PrivateRoutes>} />
            <Route path="/products" element={<PrivateRoutes isLoggedin={isLoggedIn}> <ProductList/> </PrivateRoutes>} />
            <Route path="/product/:productId" element={<PrivateRoutes isLoggedin={isLoggedIn}> <Product/> </PrivateRoutes>} />
            <Route path="/newproduct" element={<PrivateRoutes isLoggedin={isLoggedIn}> <NewProduct/> </PrivateRoutes>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;