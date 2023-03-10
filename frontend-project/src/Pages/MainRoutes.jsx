import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Read } from "../Components/Read";
import { Create } from "../Components/Create";
export const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" />
        <Route path="*" element={<h>Page not found</h>} />
      </Routes>
    </div>
  );
};
