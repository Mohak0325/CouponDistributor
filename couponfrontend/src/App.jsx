import Home from "./pages/Home";
import './App.css'
import Navbar from "./components/Navbar";
import AddCouponForm from "./components/AddCouponForm";
import { Route , Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {

  return (
    <div className="h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-coupon" element={
          <ProtectedRoutes>
           <AddCouponForm />
          </ProtectedRoutes>
          } />
      </Routes>
    </div>
  )
}

export default App


