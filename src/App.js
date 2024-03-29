import { useEffect } from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useDispatch } from "react-redux";
import { allItem } from "./redux/actions/index";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    dispatch(allItem(res?.data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
