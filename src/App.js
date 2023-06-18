import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import { Habits } from './pages/Home/home';
import { Archive } from './pages/archvie/archive';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Habits/>} />
        <Route path="/archive" element={<Archive/>} />
      </Routes>
    </div>
  );
}

export default App;
