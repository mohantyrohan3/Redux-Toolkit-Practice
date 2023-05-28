import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>

    </Router>
  );
}

export default App;
