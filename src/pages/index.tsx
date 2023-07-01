import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Product, ProductCardType } from "@/types/type";
import { stripe } from "@/utils/stripe";
import React from "react";

function Page({ products }: { products: ProductCardType[] }) {
  return (
    <>
      <div className="container xl:max-w-screen mx-auto py-12 px-6">
      <Hero />
        <div className="grid gap-8 xl:grid-cols-4 lg:cols-3 grid-cols-1 md:grid-cols-2">
          {products.map((p,index) => (
            <ProductCard product={p} key={p.id}  index={index}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;

export async function getStaticProps() {
  const prods = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });
  const products = prods.data.map((product) => {
    const price: any = product.default_price;
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0],
    };
  });

  return {
    props: {
      products: products,
    },
  };
}
