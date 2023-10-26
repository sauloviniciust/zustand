import { create } from 'zustand';
import { cardsData } from './CardsData';



type Item = {
    id: string,
    product: string,
    about: string,
    price: number,
    src: string,
    alt: string,
    item: string,
}


type CartStore  = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (product: Item) => void;
    removeFromCart:(id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],

        availableItems: cardsData,

        addToCart: (item) => set((state) => (
            {cart: [...state.cart, item] })),

        removeFromCart: (id) => set((state) => ({
            cart: state.cart.filter((item) => item.id !== id)})), 
    }
})

