import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { state } = useCart();

  return (
    <nav className="flex justify-between px-32 py-6 text-3xl bg-blue-950 text-white">
      <h1>Aaxis</h1>
      <ul className="flex gap-9">
        <li>
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Inicio
          </Link>
        </li>
        <li className="relative">
          <Link to="/cart" className="hover:text-blue-200 transition-colors">
            Carrito
          </Link>
          {state.totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {state.totalItems}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};
