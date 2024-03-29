import { useEffect, useState } from "react";
import "./App.scss";
import { Products } from "./components/Products";
import { Navbar } from "./components/Navbar";
const url = "https://fakestoreapi.com/products";

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  const fetchConnect = async () => {
    try {
      const response = await fetch(url);
      const resp = await response.json();
      setData(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const addBasket = (d) => {
    if (!basket.includes(d)) {
      setBasket( [...basket, d]);
      setTotalPrice(totalPrice + d.price);
    }
  };

  useEffect(() => {
    fetchConnect();
  }, []);

  return (
    <>
      <Navbar basket={basket} totalPrice={totalPrice}/>
      <Products veri={data} addBasket={addBasket}  />
    </>
  );
}

export default App;
