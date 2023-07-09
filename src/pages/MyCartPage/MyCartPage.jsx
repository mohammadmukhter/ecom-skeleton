import { useContext } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../provider/CartProvider";

const MyCartPage = () => {
  const { cartData } = useContext(CartContext);
  const totalCartItem = cartData?.reduce(
    (sum, data) => data.cartValue + sum,
    0
  );
  const totalCartPrice = cartData?.reduce((sum, data) => {
    const price = parseFloat(data.price.slice(1));
    console.log(price);
    return price + sum;
  }, 0);
  // console.log(totalCartItem);
  return (
    <div>
      <div className="grid md:grid-cols-[2fr_1fr] mx-16 my-8 gap-4">
        <div className="bg-white p-4 shadow-xl rounded-md">
          <div className="flex gap-4 bg-gray-600/20 rounded p-2 items-center">
            <div>
              <FaShoppingCart className="h-12 w-12"></FaShoppingCart>
            </div>
            <div className="text-gray-800 font-semibold uppercase">
              Shop Name
            </div>
          </div>
          <div>
            {cartData?.map((item) => (
              <div
                className="flex justify-between mt-2 bg-gray-50 p-2 rounded-md"
                key={item.product_id}
              >
                <div className="flex gap-4">
                  <img src={item.img} className="w-24 h-24 rounded-md" alt="" />
                  <div className="flex flex-col justify-between">
                    <div>{item.name}</div>
                    <div>
                      <div className="flex">
                        <button className="w-12 h-12 border-[1px] rounded-l-md">
                          -
                        </button>
                        <input
                          className="w-12 h-12 border-y-[1px]"
                          type="number"
                        />
                        <button className="w-12 h-12 border-[1px] rounded-r-md">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-around items-end">
                  <div>{item.price}</div>
                  <div>
                    <button className="text-red-600 bg-gray-100 rounded-md p-2 text-xl">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-white shadow-xl rounded-md h-fit ">
          <h2 className="text-xl text-gray-100 bg-gray-900/80 text-center uppercase rounded-t p-4">
            Order Your Products
          </h2>
          <div className="bg-gray-200/70 py-4 rounded-b">
            <div className="flex justify-between p-2 ">
              <p>Total Items</p>
              <p>{totalCartItem}</p>
            </div>
            <div className="flex justify-between p-2 ">
              <p>Sub Total</p>
              <p>${totalCartPrice}</p>
            </div>
            <div className="flex justify-between p-2 ">
              <p>Total</p>
              <p>${totalCartPrice}</p>
            </div>
          </div>
          <div className="mt-6  w-full flex text-center font-semibold">
            <Link className="w-full bg-transparent border-[1px] px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase">
              Confirm Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
