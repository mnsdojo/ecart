import { stripe } from "@/utils/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = req.query.id as string;
    try {
      if (!id.startsWith("cs_")) {
        throw new Error("Incorrect checkout session id ");
      }
      const checkoutSession = await stripe.checkout.sessions.retrieve(
        id as string
      );
      res.status(200).json(checkoutSession);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method not allowed");
  }
}
