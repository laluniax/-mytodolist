import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./shared/Router";
import axios from "axios";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router />
    </div>
  );
}

export default App;
