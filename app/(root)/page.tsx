import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </div>
  );
};

export default Home;
