import { useCartStore } from "../store/CartStore";

export const Cart = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart, 
    state.removeFromCart]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() =>{
                removeFromCart(item.id)
            }}>
                Remove From cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
