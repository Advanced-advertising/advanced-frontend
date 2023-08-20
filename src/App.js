import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import Modal from "./components/Modal";
import {useState} from "react";
import Settings from "./components/Settings";
import Notification from "./components/Notification";
import Advertising from "./components/Advertising";
import Payment from "./components/Payment";
import Business from "./components/Business"
import BusinessScreens from "./components/BusinessScreens"
import Screen from "./components/Screen"
import Optimize from "./components/Optimize"
import AdminLogin from "./components/AdminLogin"
import Header from "./components/Header"
import Ads from "./components/Ads"
import CreateAd from "./components/CreateAd"
import React from 'react';

function App() {

    const [open,setOpen]= useState(false)
    const [notifOpen, setNotifOpen]= useState(false)
    const [advertOpen, setAdvertOpen]= useState(false)
    const [paymentOpen, setPaymentOpen]= useState(false)

  return (
    <div>
      <Header />
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/admin_login' element={<AdminLogin/>}/>
        <Route path='/business_screens' element={<BusinessScreens/>}/>
        <Route path='/screen' element={<Screen/>}/>
        <Route path='/user_ads' element={<Ads/>}/>
        <Route path='user_ads/create_ad' element={<CreateAd/>}/>
        <Route path='/optimize' element={<Optimize/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/main' element={<Main setOpen={setOpen}
                                           setNotifOpen={setNotifOpen}
                                           setAdvertOpen={setAdvertOpen}
                                           setPaymentOpen={setPaymentOpen}
        />}/>
      </Routes>
        <Modal open={open} ><Settings onClose={() => setOpen(false)}/></Modal>
        <Modal notifOpen={notifOpen} ><Notification onClose={() => setNotifOpen(false)}/></Modal>
        <Modal advertOpen={advertOpen} ><Advertising onClose={() => setAdvertOpen(false)}/></Modal>
        <Modal advertOpen={paymentOpen} ><Payment onClose={() => setPaymentOpen(false)}/></Modal>
    </div>
      </div>
  );
}

export default App;
