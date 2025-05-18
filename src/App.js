// App.js
import './App.css';
import Home from './Components/Home/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PizzaTypingInterface from './Components/Home/PizzaDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pizza' element ={<PizzaTypingInterface/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
