import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import {useJsApiLoader} from "@react-google-maps/api";
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
import Admin from "./components/Admin"
// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY)
// const defaultCenter = {
//     lat: -3.745,
//     lng: -38.523
// };
function App() {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: API_KEY})
    const [open,setOpen]= useState(false)
    const [notifOpen, setNotifOpen]= useState(false)
    const [advertOpen, setAdvertOpen]= useState(false)
    const [paymentOpen, setPaymentOpen]= useState(false)

  return (
      <div>
      <header>
          <button className="button">Business</button>
          <button className="button">Map</button>
          <button className="button">My</button>
          <button className="button">Optimize</button>
          <button className="button">Logout</button>
      </header>
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/businessscreens' element={<BusinessScreens/>}/>
          <Route path='/screen' element={<Screen/>}/>
          <Route path='/optimize' element={<Optimize/>}/>
        <Route path='/register' element={<Register/>}/>
        {/*<Route path='/main' element={isLoaded ? <Main center={defaultCenter}/> : <h2>LOADING</h2>}/>*/}
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
