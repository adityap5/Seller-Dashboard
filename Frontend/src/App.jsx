import Navigation from "./components/Navigation";
import Display from "./pages/Display"
import { Outlet } from 'react-router-dom'
import SellerInput from "./pages/SellerInput";

function App() {

  return (
    <>
    <Navigation/>
    <Outlet/> 
    <SellerInput/>
    </>
  )
}

export default App
