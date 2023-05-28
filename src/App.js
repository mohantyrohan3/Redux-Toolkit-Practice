import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import NavBar from './components/Navbar';
import Cart from './components/Cart';
import HomeRoute from './components/HomeRoute';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <NavBar/>
        <Routes>
          <Route  path="/" element={<HomeRoute/>} />
          <Route  path="/cart" element={<Cart/>} />
        </Routes>

    </Router>
    </Provider>
  );
}

export default App;
