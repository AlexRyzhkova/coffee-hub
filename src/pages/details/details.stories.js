// import { createButton } from "../../components/button/button";
// import { createElement } from "../../utils/element";
// import { createQuantitySelector } from "../../components/quantitySelector/quanttitySelector";
import { createDetailsPage } from "./details";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  const detailsPage = createDetailsPage();
  return detailsPage;
};
