import { stripe } from "@/utils/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { validateCartItems } from "use-shopping-cart/utilities";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const cartDetails = req.body;
      const inventory = await stripe.products.list({
        expand: ["data.default_price"],
      });
      const products = inventory.data.map((product) => {
        const price: any = product.default_price;
        return {
          currency: price.currency,
          id: product.id,
          name: product.name,
          price: price.unit_amount,
          image: product.images[0],
        };
      });
      const lineItems = validateCartItems(products, cartDetails);
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: lineItems,
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
      });
      res.status(200).json(session);
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
