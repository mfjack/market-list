"use client";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRef, useState } from "react";

// useRef
// useState

const Home = () => {
   const inputRef = useRef<HTMLInputElement>(null);
   const [products, setProducts] = useState([]);

   const handleAddProduct = () => {
      if (inputRef.current) {
         setProducts([inputRef.current.value, ...products]);
         inputRef.current.value = "";
      }
   };

   const handleDeleteProduct = (index: number) => {
      setProducts(products.filter((_, i) => i !== index));
   };

   return (
      <div className="flex flex-col items-center p-5 w-full">
         <h1 className="text-xl">Lista de Compras</h1>

         <div className="flex justify-center gap-3 w-full py-5 lg:w-1/2">
            <input className="border rounded-md p-2 text-lg shadow-md w-full hover:border-slate-400" type="text" placeholder="Adicionar produto" ref={inputRef} />

            <button className="border rounded-md p-2 shadow-md hover:border-slate-400" onClick={handleAddProduct}>
               <MdOutlineAddShoppingCart size={24} />
            </button>
         </div>

         {products.length > 0 ? (
            <div className="w-full flex flex-col gap-3 items-center">
               {products.map((product, index) => (
                  <div className="border rounded-md p-2 text-lg shadow-md w-full flex justify-between lg:w-1/2">
                     <li className="list-none" key={index}>
                        {product}
                     </li>
                     <button onClick={() => handleDeleteProduct(index)}>
                        <RiDeleteBinLine size={22} />
                     </button>
                  </div>
               ))}
            </div>
         ) : (
            <span className="opacity-70 mt-5">Nenhum item</span>
         )}
      </div>
   );
};

export default Home;
