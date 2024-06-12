import Navigation from "./components/Navigation";
import Display from "./pages/Display"
import { Outlet } from 'react-router-dom'
import SellerInput from "./pages/SellerInput";
import Footer from "./pages/Footer";

function App() {

  return (
    <>
    <Navigation/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default App
