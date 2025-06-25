import { Product } from "./Product";
import { products } from "../data/products";

export const Home = () => {
  return (
    <div className="flex my-8 justify-center">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};
