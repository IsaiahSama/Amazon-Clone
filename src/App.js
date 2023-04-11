import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./StateProvider";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <UserAuthContextProvider>
          <Routes>
            <Route path="/checkout" element={[<Header />, <Checkout />]} />
            <Route path="/login" element={[<Login />]} />
            <Route path="/" element={[<Header />, <Home />]} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
