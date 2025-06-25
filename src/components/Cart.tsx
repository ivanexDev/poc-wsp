import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export const Cart = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="flex my-8 justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Tu Carrito de Compras</h2>
          <p className="text-gray-600">
            Tu carrito está vacío. ¡Agrega algunos productos!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Tu Carrito de Compras
      </h2>

      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.description}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-lg font-bold text-green-600">
                {formatCurrency(item.price)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="font-bold">
                {formatCurrency(item.price * item.quantity)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm mt-1"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total: {formatCurrency(state.totalPrice)}</span>
          <span>Artículos: {state.totalItems}</span>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={clearCart}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Vaciar Carrito
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex-1">
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};
