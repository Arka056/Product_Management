//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import EditProduct from './component/EditProduct';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/addProduct" element={<AddProduct />} ></Route>
      <Route path="/editProduct/:id" element={<EditProduct />} ></Route>
    </Routes>
    </>
    
  );
}

export default App;
