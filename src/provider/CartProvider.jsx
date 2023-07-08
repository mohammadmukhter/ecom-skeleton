import { createContext, useEffect, useState } from "react";
import useProductsDataFetcher from "../hooks/useProductsDataFetcher";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(null);
  const [products] = useProductsDataFetcher();

  useEffect(() => {
    const allLocalCartData = JSON.parse(localStorage.getItem("cart-data"));
    const matchedData = products?.filter((data) => {
      const cartFindData = allLocalCartData?.find(
        (cartItem) => cartItem.product_id === data.product_id
      );

      if (cartFindData) {
        data.cartValue = cartFindData.value;
        return true;
      }
    });
    setCartData(matchedData);
  }, [products]);

  const updateStateHandler = () => {
    const allLocalCartData = JSON.parse(localStorage.getItem("cart-data"));
    const matchedData = products?.filter((data) => {
      const cartFindData = allLocalCartData?.find(
        (cartItem) => cartItem.product_id === data.product_id
      );

      if (cartFindData) {
        data.cartValue = cartFindData.value;
        return true;
      }
    });
    setCartData(matchedData);
  };

  const cartDataSet = (product_id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cart-data"));
    let value;
    let cartValue;
    if (prevCartData) {
      const prevProduct = prevCartData.find(
        (data) => data.product_id === product_id
      );
      const othersProduct = prevCartData.filter(
        (data) => data.product_id !== product_id
      );
      if (prevProduct) {
        value = prevProduct.value + 1;
      } else {
        value = 1;
      }

      // console.log(prevProduct);
      cartValue = [
        ...othersProduct,
        {
          product_id,
          value,
        },
      ];
    } else {
      value = 1;
      cartValue = [
        {
          product_id,
          value,
        },
      ];
    }
    localStorage.setItem("cart-data", JSON.stringify(cartValue));
    updateStateHandler();
  };

  const cartValue = {
    cartDataSet,
    cartData,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
