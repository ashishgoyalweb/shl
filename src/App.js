import React from "react";
import "./App.css";

import Header from "./component/header/header";
import Login from "./component/login/login";

function App() {
  return (
    <div className="container">
      <Header />
      <Login />
    </div>
  );
}

export default App;
