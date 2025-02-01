import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

const ProductTitle = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => dispatch(addToCart(product));

  const handleRemoveToCart = () => dispatch(removeFromCart(product));

  return (
    <>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>

        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>

        <div className="flex items-center justify-center w-full mt-5">
          <button
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
            onClick={
              cart.some((item) => item.id === product?.id)
                ? handleRemoveToCart
                : handleAddToCart
            }
          >
            {cart.some((item) => item.id === product?.id)
              ? "Remove From Cart"
              : "Add From Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductTitle;
