import './App.css';
import EmptyBody from './EmptyBody';
import BottomInfo from './BottomInfo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <EmptyBody />
      <BottomInfo />
    </div>
  );
}

export default App;
