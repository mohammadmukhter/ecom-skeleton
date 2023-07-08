const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md shadow-sm">
      <figure className="p-4 ">
        <img className="rounded-md h-36 w-full" src={product.img} alt="" />
      </figure>
      <div className="p-4">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.available_quantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;
