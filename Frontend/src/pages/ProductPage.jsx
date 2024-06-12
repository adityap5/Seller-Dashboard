import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div>
            {product && (
                <>
                    <div className="flex gap-36 p-10 ">
                        <div className="overflow-hidden rounded-lg max-w-[35rem] max-h-[40rem]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="justify-center">
                            <h1 className='text-5xl'>{product.name}</h1>
                            <p className='text-xl'>{product.category}</p>
                            <p className='text-xl mt-8'>MRP : ₹{product.price}.00</p>
                            <p className='text-zinc-400 mt-2'>incl. of taxes <br />
                                (Also includes all applicable duties)</p>
                            <button className='bg-white text-black py-4 px-10 rounded-2xl font-bold my-6 hover:bg-zinc-400 hover:text-white'>Add To Bag</button>
                            <p className="text-zinc-400 ">{product.description}</p>
                            <div className='flex justify-between items-center mt-2'>



                            </div>
                            <p className='mt-2'>available stock: {product.quantity}</p>
                            <p className='mt-2'>{product.rating}⭐</p>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}
