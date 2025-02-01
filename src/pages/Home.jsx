import axios from "axios";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTitle from "../components/Product-Title";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127, 29, 29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem, index) => (
                <ProductTitle product={productItem} key={index} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
