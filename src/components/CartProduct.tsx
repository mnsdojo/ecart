import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useShoppingCart } from "use-shopping-cart";
function CartProduct({ product }: { product: any }) {
  const { setItemQuantity, removeItem } = useShoppingCart();
  return (
    <div className="flex overflow-x-auto justify-between space-x-4 hover:shadow-lg  border-opacity-0 border rounded-md p-4 bg-white">
      <Link
        href={`/products/${product.id}`}
        className="flex items-center space-x-4 group"
      >
        <div className="relative w-20 h-20 group-hover:scale-110 transition-transform ">
          <Image
            fill
            style={{
              objectFit: "contain",
            }}
            src={product.image}
            alt={product.name}
          />
        </div>
        <p className="font-semibold group-hover:underline text-xl">
          {product.name}
        </p>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setItemQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity <= 1}
            className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500 "
          >
            <AiOutlineMinus className="w-4 h-4 shrink-0" />
          </button>
          <p className="font-semibold text-xl">{product.quantity}</p>
          <button
            onClick={() => setItemQuantity(product.id, product.quantity + 1)}
            className="p-1 rounded-md hover:bg-green-100 hover:text-green-500 "
          >
            <AiOutlinePlus className="shrink-0 w-4 h-4" />
          </button>
          <p className="font-semibold text-xl ml-16 ">
            <RxCross2 className="hidden w-4 h-4 text-gray-500 sm:inline-block mr-4 mb-1" />
            {product.formattedPrice}
          </p>
          <button
            onClick={() => removeItem(product.id)}
            className="ml-4 hover:text-red-500"
          >
            <CiCircleRemove className="w-6 h-6 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
