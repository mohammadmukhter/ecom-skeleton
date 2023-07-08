const cartDataSet = (product_id)=> {
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

      console.log(prevProduct);
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
}

export default cartDataSet;