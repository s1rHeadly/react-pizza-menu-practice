import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData as data } from "./data.js";
import Footer from "./Footer.js";
import './index.css';

// main app component
const App = () => {
  return (
    <div className="container">
     <Header />
     <Menu dataObj={data}/>
      <Footer />
    </div>
  )
}



const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = ({dataObj}) => {


let hasItems = 'Sorry no items are on the menu';
if(dataObj.length > 0){
   hasItems = dataObj.map((items) => <Pizza pizzaItems={items} key={items.name}/>)
}

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
      {hasItems}
      </ul>      
    </main>
  )
}


const Pizza = ({pizzaItems}) => {

  // format price function
  console.log(pizzaItems)
   const priceformat = (str) => {
    if(!str) return;
     let number = str && parseInt(str);
     number = number * 3;
     return number;
   }


   // sold out prop
   let isSoldOut = pizzaItems.soldOut ? 'sold out' : "Available"; // if sold out display nothing otherwise show its availability
   

  
  return (
    <li className={`pizza ${pizzaItems.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaItems.photoName} alt={pizzaItems.name} />
     <div>
     <h3>{pizzaItems.name}</h3>
      <p>{pizzaItems.ingredients}</p>
      <span>{priceformat(pizzaItems.price)}</span>
      <p><span>{isSoldOut}</span></p>
     </div>
    </li>
  )
}








// rendering the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);