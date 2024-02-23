import './App.css';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Customers from './pages/customers/customers';
import Orders from './pages/orders/orders';
import Categories from './pages/categories/categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import MainLayout from './layouts/main/main';
import AuthLayout from './layouts/auth/auth';
import Signup from './pages/signup/signup';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<MainLayout><Home /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/customers" element={<MainLayout><Customers /></MainLayout>} />
        <Route path="/orders" element={<MainLayout><Orders /></MainLayout>} />
        <Route path="/categories" element={<MainLayout><Categories /></MainLayout>} />
        <Route path='/login' element={<AuthLayout><Login /></AuthLayout>} />
        <Route path='/signup' element={<AuthLayout><Signup /></AuthLayout>} />
      </Routes>
    </>
  );
}

export default App;
