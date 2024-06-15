import {useNavigate } from "react-router-dom";

export function AdminDashboard() {
    const navigate = useNavigate();
  
    const handleClick = () => { 
      navigate("/admin");
    };
  return (
    <button onClick={handleClick} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
      Admin Dashboard
    </button>
  );
}