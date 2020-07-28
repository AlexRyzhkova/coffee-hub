import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "9000";
    });
  });
  return '<button class="btn">Hallo Fische</button>';
};

// calls internal alert function
// let message = "Hello Fische";
// message = "Fish Ahoi ✌🏻";
// alert(message);
// alert("Hello");

// // static
// const pi = 3.141;

// const numberOfStudents = ;
// const message = `Hallo ${numberOfStudents} fishes`;
// alert(message);
