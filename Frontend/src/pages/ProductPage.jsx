import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4 md:p-10">
            {product && (
                <>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-36 p-4">
                        <div className="overflow-hidden rounded-lg max-w-full md:max-w-[35rem] max-h-[40rem]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="justify-center">
                            <h1 className='text-3xl md:text-5xl'>{product.name}</h1>
                            <p className='text-lg md:text-xl'>{product.category}</p>
                            <p className='text-lg md:text-xl mt-4 md:mt-8'>MRP : ₹{product.price}.00</p>
                            <p className='text-sm md:text-base text-zinc-400 mt-2'>incl. of taxes <br />
                                (Also includes all applicable duties)</p>
                            <button
                                onClick={() => {
                                    if (token) {
                                        navigate("/cart");
                                    } else {
                                        navigate("/login");
                                        alert("Please login first");
                                    }
                                }}
                                className='bg-white text-black py-2 md:py-4 px-6 md:px-10 rounded-xl md:rounded-2xl font-bold my-4 md:my-6 hover:bg-zinc-400 hover:text-white'
                            >Add To Bag</button>
                            <p className="text-sm md:text-base text-zinc-400 ">{product.description}</p>
                            <div className='flex justify-between items-center mt-2'></div>
                            <p className='text-sm md:text-base mt-2'>Available stock: {product.quantity}</p>
                            <p className='text-sm md:text-base mt-2'>{product.rating}/5⭐</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
