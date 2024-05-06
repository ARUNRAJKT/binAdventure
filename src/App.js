import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/MainPage.jsx';
import Loader from './Components/loader.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/' element={<Loader />} /> */}


      </Routes>
    </Router>

  );
}

export default App;
