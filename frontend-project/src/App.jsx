import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Create } from "./Components/Create";
import { Read } from "./Components/Read";
import { MainRoutes } from "./Pages/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};
export default App;
