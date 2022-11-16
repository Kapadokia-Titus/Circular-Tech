import React from "react";
import Header from "./components/Header";
import Body from "./pages/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepairShop from "./pages/RepairShop";

import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Create from "./Create/Create";
import SingleShop from "./pages/SingleShop";
import Customer from "./pages/Customer";
import Images from "./pages/Images";
import SideBar from "./components/SideBar";

import TechnicianLogIn from "./pages/TechnicianLogIn";
import Registration  from "./pages/Registration";
import ChatContainer from "./pages/ChatContainer";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="RepairShop" element={<RepairShop/>} />
        <Route path="RepairShop/:RepairShopId" element={<SingleShop />} />
       
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="Create" element={<Create />} />
        <Route path="Customer" element={<Customer />} />
        <Route path="ChatContainer" element={<ChatContainer />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="TechnicianLogIn" element={<TechnicianLogIn />} />
        <Route path="Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
