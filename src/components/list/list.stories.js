import "./list.css";
import { createList } from "./list";

export default { title: "List" };

export const addList = () => {
  const list = createList();

  return list;
};
