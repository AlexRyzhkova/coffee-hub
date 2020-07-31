import "./list.css";
import { createElement } from "../../utils/element";
import espressoSrc from "../../assets/espresso.svg";
import cappuchinoSrc from "../../assets/cappuchino.svg";
import macchiatoSrc from "../../assets/macchiato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";
import arrowSrc from "../../assets/back.svg";

export function createList() {
  const coffees = [
    { name: "Esspresso", imgSrc: espressoSrc, imgClass: "item-icon" },
    { name: "Cappuccino", imgSrc: cappuchinoSrc, imgClass: "item-icon" },
    { name: "Macchiato", imgSrc: macchiatoSrc, imgClass: "item-icon" },
    { name: "Mocha", imgSrc: mochaSrc, imgClass: "item-icon" },
    { name: "Latte", imgSrc: latteSrc, imgClass: "item-icon" },
  ];

  const list = createElement("ul");
  list.className = "list";

  coffees.forEach((coffee) => {
    const listItem = createElement("li");
    const coffeeImg = createElement("img", { src: coffee.imgSrc });
    listItem.append(coffeeImg);

    coffeeImg.className = coffee.imgClass;
    const span = createElement("span", { innerText: coffee.name });
    listItem.append(span);

    const arrowIcon = createElement("img", {
      src: arrowSrc,
    });
    listItem.append(arrowIcon);

    list.append(listItem);
  });

  return list;
}
