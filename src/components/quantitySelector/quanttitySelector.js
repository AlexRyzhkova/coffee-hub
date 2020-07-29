import { createElement } from "../../utils/element";
import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";

export const createQuantitySelector = () => {
  //   const qauntitySelector = document.createElement("div");
  //   qauntitySelector.className = "quantitySelector";
  const quantitySelector = createElement("div", {
    className: "selector-container",
  });

  //  minus button

  // const minusButton = document.createElement("button");
  // minusButton.className = "btn-minus";
  // minusButton.innerHTML = "-";
  const minusButton = createElement("button", {
    className: "btn_minus",
    disabled: true,
  });

  // Minus image
  const minusImage = createElement("img", { src: minusSrc, alt: "Minus" });

  minusButton.append(minusImage);

  // Result

  // const resultElement = document.creataElement("div");
  // resultElement.className = "slector-result";
  // resultElement.innerText = "1";
  const resultElement = createElement("div", {
    className: "selector_result",
    innerText: "1",
  });

  // plus button
  // const plusButton = document.createElement("button");
  // minusButton.className = "btn-plus";
  // minusButton.innerHTML = "+";
  const plusButton = createElement("button", {
    className: "btn_plus",
  });

  //   plus image

  const plusImage = createElement("img", { src: plusSrc, alt: "Plus" });

  plusButton.append(plusImage);

  quantitySelector.append(minusButton);
  quantitySelector.append(resultElement);
  quantitySelector.append(plusButton);

  // Add event listener
  minusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.innerHTML);

    if (oldResult === 2) {
      minusButton.disabled = true;
    }
    resultElement.innerHTML = oldResult - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.innerHTML);

    if (oldResult === 1) {
      minusButton.disabled = false;
    }
    resultElement.innerHTML = oldResult + 1;
  });
  return quantitySelector;
};
