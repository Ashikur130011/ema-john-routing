import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='shop' element={<Shop/>} />
          <Route path='orders' element={<OrderReview/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='inventory' element={<ManageInventory/>} />
          <Route path='placeOrder' element={<PlaceOrder/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
