import Homepage from "./components/Homepage";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Agents from "./components/Agents";
import Footer from "./components/Footer";
import AgentDetail from './components/AgentDetail';
import Weapons from './components/Weapons'
import WeaponDetail from './components/WeaponDetail'
import Maps from './components/Maps'
import { useState } from 'react'
import MainContext from "./context/MainContext";

const App = () => {

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)

  return (
    <MainContext.Provider value={{ loading, setLoading, response, setResponse }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/agents" element={<Agents />} exact></Route>
          <Route path="/weapons" element={<Weapons />}></Route>
          <Route path="/maps" element={<Maps />}></Route>
          <Route path="/agents/detail/:id" element={<AgentDetail />}></Route>
          <Route path="/weapons/detail/:id" element={<WeaponDetail />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
