import { createButton } from "./button";
import "./button.css";

// Storybook
export default { title: "Button" };

// Storybook
export const addToCart = () => {
  const button = createButton("Add to cart");
  return button;
};
