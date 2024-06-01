import Product from "../components/ProductCard";
import products from "../products";


const Home = () => {
  return (
    <>
    <h1>Featured Products</h1>
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
      {products.map((product) => {
        return <Product product={product} key={product._id} />;
      })}
      </div>
    </>
  );
};

export default Home;
