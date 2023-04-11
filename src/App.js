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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MvqNCBPj4lU7hQg4ye93VzAUNRyhq6X2NoaqGwZWsPYhvghe0QJN0BUwLWiYA4Y1N3Fq6ezopMqsPBfwbhTdZDg00TE58Awj0"
);

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
            <Route
              path="/payment"
              element={[
                <Header />,
                <Elements stripe={promise}>
                  <Payment />
                </Elements>,
              ]}
            />
            <Route path="/" element={[<Header />, <Home />]} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
