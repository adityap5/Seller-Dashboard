import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Logout } from './Logout';

function Navigation() {
    const token = localStorage.getItem('token');
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
                {token &&  <Logout/>}
            </nav>
       
        </div>
    )
}

export default Navigation
