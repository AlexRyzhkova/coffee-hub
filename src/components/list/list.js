import "./list.css";
import { createElement } from "../../utils/element";
import espressoSrc from "../../assets/espresso.svg";
import cappuchinoSrc from "../../assets/cappuchino.svg";
import macchiatoSrc from "../../assets/macchiato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";

export function createList() {
  const coffees = [
    { name: "Esspresso", imgSrc: espressoSrc, imgClass: "item-icon" },
    { name: "Cappuccino", imgSrc: cappuchinoSrc, imgClass: "item-icon" },
    { name: "Macchiato", imgSrc: macchiatoSrc, imgClass: "item-icon" },
    { name: "Mocha", imgSrc: mochaSrc, imgClass: "item-icon" },
    { name: "Latte", imgSrc: latteSrc, imgClass: "item-icon" },
  ];

  const list = createElement("ul");

  coffees.forEach((coffee) => {
    const listItem = createElement("li", { innerText: coffee.name });

    const img = createElement("img", {
      src: coffee.imgSrc,
    });
    img.className = coffee.imgClass;
    listItem.prepend(img);
    list.append(listItem);
  });

  return list;
}
