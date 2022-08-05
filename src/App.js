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

const App = () => {

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(false)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/agents" element={<Agents setLoading={setLoading} loading={loading} response={response} setResponse={setResponse} />} exact></Route>
        <Route path="/weapons" element={<Weapons setLoading={setLoading} loading={loading} response={response} setResponse={setResponse} />}></Route>
        <Route path="/maps" element={<Maps setLoading={setLoading} loading={loading} response={response} setResponse={setResponse} />}></Route>
        <Route path="/agents/detail/:id" element={<AgentDetail setLoading={setLoading} loading={loading} response={response} setResponse={setResponse} />}></Route>
        <Route path="/weapons/detail/:id" element={<WeaponDetail setLoading={setLoading} loading={loading} response={response} setResponse={setResponse} />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
