import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import SignUp from './component/authPages/SignUp';
import Login from './component/authPages/Login';
import Dashboard from './component/pages/Dashboard';
import VerifyOtp from './component/authPages/VerifyOtp';
import ForgotPassword from './component/authPages/ForgotPassword';
import RecetPassword from './component/authPages/RecetPassword';
import FormComponent from './component/pages/Form';
import  Ujjwal  from './component/pages/Main';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Product from './component/pages/Product';
import Services from './component/pages/Services';
import Validation from './component/pages/Valiadation';
import UserLogin from './component/pages/UserLogin';
import ProtectedRoute from './component/pages/ProtectedRoute';

function App() {
  return (
    <>
    
      {/* Use BrowserRouter as Router to wrap the Routes */}
        {/* Use Routes to wrap individual Route components */}
        <Routes>
          {/* Define a Route path and its corresponding element */}
          {/* <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/recetPassword" element={<RecetPassword />} />
          <Route path='/main' element={ <Dashboard />}/> */}
          <Route path='/form' element={< FormComponent />} />
          <Route path='/' element={< Ujjwal/>} />
          {/* <Route path='/about' element={<   About/>} /> */}
          <Route path='/about' element={<   ProtectedRoute component={<   About/>}/>} />
          <Route path='/contact' element={< ProtectedRoute component={<Contact />}   />} />
          <Route path='/product' element={< Product/>} />
          <Route path='/services' element={< Services/>} />
          <Route path='/validation' element={< Validation/>} />
          <Route path='/login' element={< UserLogin/>} />
       
        </Routes>

        
    
    </>
  );
}

export default App;
