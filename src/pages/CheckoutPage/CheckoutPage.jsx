import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const cartData = location.state.cartData;

  const totalCartItem = cartData?.reduce(
    (sum, data) => data.cartValue + sum,
    0
  );
  const totalCartPrice = cartData?.reduce((sum, data) => {
    const price = parseFloat(data.price.slice(1));
    console.log(price);
    return price + sum;
  }, 0);

  const handleShippingAddressChange = (e) => {
    console.log(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    console.log(e.target.value);
  };

  const handlePlaceOrder = () => {
    console.log("order");
  };

  return (
    <div className="mx-16 my-8">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <div className="mb-4">
        <label htmlFor="shippingAddress" className="block mb-1">
          Shipping Address:
        </label>
        <input
          type="text"
          id="shippingAddress"
          onChange={handleShippingAddressChange}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="paymentMethod" className="block mb-1">
          Payment Method:
        </label>
        <input
          type="text"
          id="paymentMethod"
          onChange={handlePaymentMethodChange}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">Order Summary:</h3>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr]">
        <div className="flex flex-col">
          {cartData.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex w-full items-center">
                <img
                  src={item.img}
                  className="h-12 w-12 rounded-md mr-2"
                  alt={item.name}
                />
                <div className="flex w-full">
                  <p className="w-6/12">{item.name}</p>
                  <p className="w-3/12">Price: {item.price}</p>
                  <p className="w-3/12">Quantity: {item.cartValue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="mb-4 ">
            <div>
              <div className="flex justify-between">
                <p>Total Items</p>
                <p>{totalCartItem}</p>
              </div>
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>${totalCartPrice}</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>${totalCartPrice}</p>
              </div>
            </div>
          </div>
          <div className="">
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-gray-300  font-bold border-[1px] border-gray-700 px-4 py-2 rounded-md hover:bg-black hover:text-gray-100 uppercase"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
