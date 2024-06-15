import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Logout } from './Logout';
import { AdminDashboard } from './AdminDashboard';

function Navigation() {
    const token = localStorage.getItem('token');
    const adminToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjZkNmI5OWRiMDE2YjVjMmQ2ODExMWUiLCJyb2xlIjoidXNlciIsImlhdCI6MTcxODQ0Nzg2NywiZXhwIjoxNzE4NDUxNDY3fQ.bDRCr1dDohv2xYCXy9sGUEpCleR-3Bxf4lZ10g4MJBM"
    const navigate = useNavigate();
    return (
        <div className="p-6">
            <nav className='flex items-center justify-between'>
                <ul className="flex gap-4 cursor-pointer text-zinc-400">
                    <li
                        onClick={() => navigate("/")}
                    >Home</li>

                    {!token &&<li
                        onClick={() => navigate("/register")}
                    >Register</li>}

                    {!token && <li
                        onClick={() => navigate("/login")}
                    >Login</li>}
                    <li onClick={() => navigate("/products")} >Products</li>
                </ul>
                <div className=' flex gap-4'>

                {token === adminToken && <AdminDashboard/>}
                {token &&  <Logout/>}
                </div>
            </nav>
       
        </div>
    )
}

export default Navigation
