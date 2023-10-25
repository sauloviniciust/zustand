import { create } from 'zustand';

type Item = {
    id: number;
    name: string;
    price: number;
}


type CartStore  = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart:(id: number) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],
        availableItems: [],
        addToCart: (item) => set((state) => ({cart: [...state.cart, item] })),
        removeFromCart: (id) => set((state) => ({cart: state.cart.filter((item) => item.id !== id)})),
    }
})

