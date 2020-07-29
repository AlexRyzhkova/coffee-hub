import "./quantitySelector.css";
import { createQuantitySelector } from "./quanttitySelector";
// import quantitySelector from "./quantitySelector.html";
// import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

export const cofeeSelector = () => {
  const quantitySelector = createQuantitySelector();
  return quantitySelector;
};

// export const coffeeSelector = () => {
//   useEffect(() => {
//     // Select buttons here
//     const buttonMinus = document.querySelector(".btn_minus");
//     const buttonPlus = document.querySelector(".btn_plus");
//     const resultElement = document.querySelector(".selector_result");

//     buttonMinus.addEventListener("click", () => {
//       const oldResult = Number(resultElement.innerHTML);

//       if (oldResult === 2) {
//         buttonMinus.disabled = true;
//       }
//       resultElement.innerHTML = oldResult - 1;
//     });

//     buttonPlus.addEventListener("click", () => {
//       const oldResult = Number(resultElement.innerHTML);
//       resultElement.innerHTML = oldResult + 1;
//       if (oldResult === 1) {
//         buttonMinus.disabled = false;
//       }
//     });
//   });
//   return quantitySelector;
// };
