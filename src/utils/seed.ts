
import { products } from "./prod";
import { stripe } from "./stripe";

(async () => {
  for (const prod of products) {
    const stripeProduct = await stripe.products.create({
      name: prod.name,
      default_price_data: {
        currency: prod.currency,
        unit_amount_decimal: String(prod.price),
      },
      images: [prod.image],
    });
    console.log(stripeProduct.name, ":", stripeProduct.id);
  }
})();
