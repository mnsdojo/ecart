import CartProduct from "@/components/CartProduct";
import Link from "next/link";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";
function Cart() {
  const {
    cartCount,
    clearCart,
    redirectToCheckout,
    formattedTotalPrice,
    cartDetails,
  } = useShoppingCart();
  const [isRedirecting, setRedirecting] = useState(false);
  async function onCheckOut() {
    if (cartCount && cartCount > 0) {
      try {
        setRedirecting(true);
        const { id }: { id: string } = await axios
          .post("/api/checkout-sessions", cartDetails)
          .then((res) => res.data);
        const result = await redirectToCheckout(id);
        if (result?.error) {
          console.log(result);
        }
      } catch (error) {
        console.log("Error", error);
      } finally {
        setRedirecting(false);
      }
    }
  }
  return (
    <div className="container xl:max-w-screen-xl mx-auto px-6 py-12">
      {cartCount ? (
        <>
          <h2 className="text-4xl font-semibold">Your shopping cart</h2>
          <p className="mt-1 text-3xl">
            {cartCount} items{""}
            <button
              onClick={() => clearCart()}
              className="ml-1 capitalize opacity-50 hover:opacity-100 text-base "
            >
              (clear all)
            </button>
          </p>
        </>
      ) : (
        <EmptyPage />
      )}

      {cartCount && cartCount > 0 && (
        <>
          <div className="mt-12 space-y-4">
            {Object.entries(cartDetails as any).map(([key, product]) => (
              <>
                <CartProduct key={key} product={product} />
              </>
            ))}
            <div className="flex flex-col items-end border-t py-4 mt-8">
              <p className="text-xl">Total: </p>
              <span className="font-semibold">{formattedTotalPrice}</span>
              <button
                disabled={isRedirecting}
                onClick={onCheckOut}
                className=" text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-500 mt-4 max-w-max  border rounded py-2 px-6 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 focus:ring-opacity:500 focus:ring-yellow-500"
              >
                {isRedirecting ? "Redirecting" : "Go to Checkout"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

const EmptyPage = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold">Your shopping cart is empty</h2>
      <p className="mt-1 text-xl">Check out our awesome products{""}</p>
      <Link href="/" className="text-red-500 underline">
        here!
      </Link>
    </>
  );
};
