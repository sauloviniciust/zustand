import { create } from 'zustand';

const initialItens = [
    {
        id: "p01",
        name: "Yoga mat",
        price: 19.99
        },
        {
        id: "p2",
        name: "Smartphone case",
        price: 12.99
        },
        
        {
        id: "p3",
        name: "Wireless Bluetooth headphones",
        price: 49.99
        },
        
        {
        id: "p4",
        name: "Coffee maker",
        price: 39.95
        },
        
        {
        id: "p5",
        name: "Laptop backpack",
        price: 34.99
        },
        
        {
        id: "p6",
        name: "HD LED TV",
        price: 349.99
        },
        
        {
        id: "p7",
        name: "Digital camera",
        price: 199.99
        },
        
        {
        id: "p8",
        name: "Fitness tracker",
        price: 69.99
        },
        
        {
        id: "p9",
        name: "Kitchen knife set",
        price: 49.95
        },
        
        {
        id: "p10",
        name: "Men's leather wallet",
        price: 24.99
        },
        
       
 
]

type Item = {
    id: string;
    name: string;
    price: number;
}


type CartStore  = {
    availableItems: Item[];
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart:(id: string) => void;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        cart: [],

        availableItems: initialItens,

        addToCart: (item) => set((state) => (
            {cart: [...state.cart, item] })),

        removeFromCart: (id) => set((state) => ({
            cart: state.cart.filter((item) => item.id !== id)})), 
    }
})

