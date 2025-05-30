export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const DESCRIPTION =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Ecommerce platform built with Next.js";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValue = {
  email: "senatorcox90@gmail.com",
  password: "",
};
