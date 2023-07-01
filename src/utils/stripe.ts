import Stripe from "stripe";

export const stripe = new Stripe(("sk_test_51NM1NRSDqyo3y4yydJZ6DC2PwC1mYDBHSeyL6LYPRl2ktBgIZoKokAObL4LtqJ9wQlLnvYgrJqv6sE3FZEuj86Ob00inJPCz3O") || "", {
  apiVersion: "2022-11-15",
});
