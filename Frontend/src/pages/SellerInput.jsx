import React, { useState } from 'react';
import axios from 'axios';

function SellerInput() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://seller-dashboard-quz0.onrender.com/api/products', {
                name,
                price,
                description,
                image,
                category,
                quantity,
                rating
            });
            console.log('Product saved:', response.data);
            setName('');
            setPrice("");
            setDescription('');
            setImage('');
            setCategory('');
            setQuantity('');
            setRating(0);
            window.location.reload();
        } catch (error) {
            console.error('Error saving Product:', error.message);
        }
    }

    return (
        <div className="p-4 sm:p-10">
            <h1 className="text-2xl sm:text-3xl font-bold">
                Products
            </h1>
            <form onSubmit={handleSubmit} className="grid pt-2 gap-4">
                <div>
                    <p className="my-2">Title</p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name of the product"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <div>
                    <p className="my-2">Description</p>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="description"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <div>
                    <p className="my-2">Price</p>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        placeholder="price"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <div>
                    <p className="my-2">Quantity</p>
                    <input
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        type="text"
                        placeholder="quantity"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <div>
                    <p className="my-2">Image Url</p>
                    <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        placeholder="image url"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <div>
                    <p className="my-2">Category</p>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        placeholder="category"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <div>
                    <p className="my-2">Rating</p>
                    <input
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        type="number"
                        placeholder="rating out of 5"
                        className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-full sm:w-1/2'
                    />
                </div>
                <button type="submit" className="bg-green-700 my-2 font-semibold p-2 w-full sm:w-16 rounded-lg">ADD</button>
            </form>
        </div>
    )
}

export default SellerInput;
