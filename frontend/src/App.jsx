import { useState } from "react";
// import "./App.css";
//Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";
import ProductsPage from "./components/productsPage/ProductsPage";
import Footer from "./components/footer/Footer";
// import LoginDialog from "./components/login/LoginDialog";

// //payment Components
// import PaymentSuccess from "./components/payment/PaymentSuccess";
import PaymentFailure from "./components/payment/PaymentFailure";
//

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//Toast Notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailView />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login" element={<LoginDialog open={true} />} /> */}
          <Route path="/productsPage/:category" element={<ProductsPage />} />
          {/* //Payments Route */}
          {/* {/* <Route path="/payment-success" element={<PaymentSuccess />} /> */}
          <Route path="/payment-failure" element={<PaymentFailure />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
