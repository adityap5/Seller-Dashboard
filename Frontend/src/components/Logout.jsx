import {useNavigate } from "react-router-dom";

export function Logout() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('token'); 
      navigate("/login");
    };
  return (
    <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
      Logout
    </button>
  );
}