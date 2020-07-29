import "./details.css";
import { createButton } from "../../components/button/button";
import { createElement } from "../../utils/element";
import { createQuantitySelector } from "../../components/quantitySelector/quanttitySelector";
import macchiatoSrc from "../../assets/macchiato.svg";

const createForm = () => {
  const coffeeName = createElement("div", { innerText: "Machhiato" });
  const price = createElement("div", { innerText: "$2.90" });
  coffeeName.append(price);

  const coffeeSize = createElement("label", { innerText: "Size" });
  const size = createElement("input");
  coffeeSize.append(size);

  const coffeSugar = createElement("label", { innerText: "Sugar" });
  const sugar = createElement("input", {});
  coffeSugar.append(sugar);

  const quantitySelector = createQuantitySelector();

  const button = createButton("Add to cart");

  const form = createElement("form", { className: "details__form" });

  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeSugar);
  form.append(button);

  return form;
};

const createHeader = () => {
  const header = createElement("header", { className: "details__header" });
  const titel = createElement("h2", { innerText: "Macchiato" });
  const img = createElement("img", { src: macchiatoSrc, alt: "Macchiato cup" });
  header.append(titel);
  header.append(img);

  return header;
};

export const createDetailsPage = () => {
  const main = createElement("main", { className: "details" });
  const header = createHeader();
  const form = createForm();
  main.append(header);
  main.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  return main;
};
