import { useCartStore } from "../store/CartStore";

export const AvailableProducts = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems, 
    state.addToCart]);

  return (

    <div>
        <h1>Choose a product</h1>

      <section className="flex">

        {items.map((item) => (
         <section key={item.id}
         className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 
         border-zinc-600 scale-75 md:scale-90 lg:scale-90 xl:scale-100 
         transition overflow-hidden ease-in-out delay-100 text-center 
         z-10 transform hover:scale-105 border-2 shadow-2xl ">

       <>
       
               <img className="h-auto" src={item.src} alt={item.alt}/>
           
         

           <div className="flex font-bold flex-col gap-5 p-4 text-black">
             <h3 className="text-xl">{item.product}</h3>

             <p className="text-zinc-300">{item.about}</p>

         

             <h1>R$ - ${item.price}</h1>

           </div>
       </>
         <a onClick={() => {addToCart(item);}}
         >
         
         </a>
            <button onClick={() =>{
                addToCart(item)
            }}>
                Add to cart
            </button>
       </section>
     ))}
          
      
      </section >
    </div>
  );
};
