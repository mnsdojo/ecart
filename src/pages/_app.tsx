import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "use-shopping-cart";
export default function App({ Component, pageProps }: AppProps) {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  return (
    <CartProvider
      shouldPersist
      stripe={stripeKey ?? ""}
      currency="USD"
      cartMode="checkout-session"
    >
      <Layout>
        <Component {...pageProps} />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Layout>
    </CartProvider>
  );
}
