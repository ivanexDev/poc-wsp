import type { FC } from "react";
import { formatCurrency } from "../utils/formatCurrency";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const Product: FC<Product> = ({ description, image, price, title }) => {
  return (
    <div className="flex flex-col w-[216px] border border-gray-300 p-5 pt-6 mx-2.5 justify-between rounded-lg">

      <div>
        <img src={image} alt={description} className="line-clamp-2 w-[174px] h-[174px]" />
        <h3 className="text-[#999999]">{title}</h3>
        <p className="text-[#222222]">{description}</p>
        <div>
          <span>{formatCurrency(price)}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-red-500 text-white py-1 px-3 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
};
