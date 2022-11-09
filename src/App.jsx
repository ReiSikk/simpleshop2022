import { useEffect, useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  function addToCart(data) {
    //do we have the product
    if (cart.find((entry) => entry.id === data.id)) {
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          //make a copy of the entry
          const copy = { ...entry };
          //set the correct amount
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      //add a property called amount if it's not in the state already
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }
  function removeFromCart(id) {
    //find and modify a product
    setCart((oldCart) => {
      const substracted = oldCart.map((item) => {
        if (item.id === id) {
          //this creates a new object for us but with the new amount
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      //filtered will be our new state which we return to setCart
      const filtered = substracted.filter((item) => item.amount > 0);
      return filtered;
    });
    //filter
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Basket removeFromCart={removeFromCart} products={products} cart={cart} />
    </div>
  );
}

export default App;
