import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider, useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // User just logged in or was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // THe user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <UserAuthContextProvider>
          <Routes>
            <Route path="/checkout" element={[<Header />, <Checkout />]} />
            <Route path="/login" element={[<Login />]} />
            <Route path="/payment" element={[<Header />, <Payment />]} />
            <Route path="/" element={[<Header />, <Home />]} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
