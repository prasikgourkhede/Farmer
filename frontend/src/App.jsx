import React from 'react'
import Login from './pages/Login'
import { Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import AiPlant from './pages/components/AiPlant'
import Auction from './pages/components/Auction'
import BuyerLogin from './pages/BuyerLogin'
import BuyerRegister from './pages/BuyerRegister'
import Card from './pages/components/Card'
import CardMap from './pages/components/CardMap'
import Favourites from './pages/components/Favourites'
const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aiplant' element={<AiPlant />} />
        <Route path='/auction' element={<Auction />}/>
        <Route path='/buyerlogin' element={<BuyerLogin />}/>
        <Route path='buyer-register' element={<BuyerRegister/>}/>
        <Route path='card' element={<Card/>}/>
        <Route path='cardmap' element={< CardMap/>} />
        <Route path='favourites' element={< Favourites/>} />
        <Route path="*" element={<h2 style={{ padding: 16 }}>404 - Not Found</h2>} />
    </Routes>
    </>
  )
}

export default App