import React, { useEffect ,useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
function Display() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(()=> {  
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/products');
          setProduct(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchData();  
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    
    <div className="p-12 flex gap-3 flex-wrap">
        {product.map((product) => (
  <div key={product.id} className="w-64 h-64 truncate bg-slate-700 gap-2 rounded-xl p-4">
  <img src={product.image} alt="" />
  <h2 className="font-semibold">{product.name}</h2>
  <div className="text-slate-400 mt-2 flex justify-between text-sm ">

  <p className="text-gray-300">MRP: ₹{product.price}</p>
  <p className="text-gray-300">{product.category}</p>
  </div>
  <p className="text-slate-400 mt-1 text-sm ">rating {product.rating} out of 5</p>
  <div className="text-slate-400 cursor-pointer mt-2 flex justify-between text-sm ">
  {/* <Link to={`/products/${product.id}`} >view more</Link> */}

  </div>
 </div>
        ))}
      
        </div>
   
  )
}

export default Display
