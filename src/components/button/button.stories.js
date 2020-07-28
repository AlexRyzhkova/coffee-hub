import "./button.css";
// import button from "./button.html";

export default { title: "Button" };

function createButton(buttonText) {
const button = document.createElement("button");
 button.className = "btn";
 const text = document.createTextNode(buttonText); 
 button.append(text); 
 
 button.addEventListener( "click" , () => {alert("Hallo");
})

return button;
}

export const addToCart = () => {

   const button = createButton("Add to cart");

    // const button = document.createElement("button");
    // button.className ="btn";
    // button.innerText = "Add to cart";

return button;
};