import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto bg-gray-100 min-h-screen">
      <h2 className="text-2xl mb-4 font-bold">Home Page</h2>
      <p className="mb-4">Welcome! Explore dummy products below.</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border bg-yellow-100 p-4">
  {products.map((product) => (
    <div
      key={product.id}
      className="min-w-0 bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h3 className="font-semibold text-lg line-clamp-2 mb-1">{product.title}</h3>
      <p className="text-blue-600 font-medium mb-2">${product.price}</p>
      <button className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default Home;
