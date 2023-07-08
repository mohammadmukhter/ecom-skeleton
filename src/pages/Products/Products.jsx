import useProductsDataFetcher from "../../hooks/useProductsDataFetcher";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, loading] = useProductsDataFetcher();

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div className="shadow-[2px_3px_3px_3px_rgba(0,199,100,0.05)] bg-white px-4 py-8 my-12 rounded-md">
      <div className="text-xl mb-4 flex justify-between">
        <h2>products</h2>
        <button className="bg-transparent border-[1px] rounded-md  text-gray-900 px-3 py-1 uppercase font-semibold hover:bg-gray-900 hover:text-white">
          show more
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
