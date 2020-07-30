import { createElement } from "../../utils/element";
import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";

export const createQuantitySelector = () => {
  const quantitySelector = createElement("div", {
    className: "selector-container",
  });

  //  minus button

  const minusButton = createElement("button", {
    className: "btn_minus",
    disabled: true,
    type: "button",
  });

  // Minus image
  const minusImage = createElement("img", { src: minusSrc, alt: "Minus" });

  minusButton.append(minusImage);

  // Result
  const resultElement = createElement("input", {
    className: "selector_result",
    value: "1",
    type: "number",
    min: 1,
    max: 9,
    name: "quantity",
  });

  // plus button
  const plusButton = createElement("button", {
    className: "btn_plus",
    type: "button",
  });

  //   plus image

  const plusImage = createElement("img", { src: plusSrc, alt: "Plus" });

  plusButton.append(plusImage);

  quantitySelector.append(minusButton);
  quantitySelector.append(resultElement);
  quantitySelector.append(plusButton);

  // Add event listener
  minusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.value);

    if (oldResult === 2) {
      minusButton.disabled = true;
    }
    // resultElement.innerHTML = oldResult - 1;
    if (oldResult === 9) {
      plusButton.disabled = false;
    }
    resultElement.value = oldResult - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.value);

    if (oldResult === 1) {
      minusButton.disabled = false;
    }
    // resultElement.innerHTML = oldResult + 1;
    if (oldResult === 8) {
      plusButton.disabled = true;
    }
    resultElement.value = oldResult + 1;
  });
  return quantitySelector;
};
