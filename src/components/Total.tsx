import { useCartStore } from "../store/CartStore";

export const Total = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const items = useCartStore((state) => state.cart)

    const sum = items.reduce((acc, item) => acc + item.price, 0);

    const formater = new Intl.NumberFormat("pr-BR", {
      style: "currency",
      currency: "BRL",
    })

  return (
    <div>
      <h1>Total {formater.format(sum)}</h1>
      
    </div>
  );
};
