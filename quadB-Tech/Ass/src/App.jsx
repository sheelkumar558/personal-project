import React from "react";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Summary } from "./components/Summary";
import { BookMovie } from "./components/BookMovie";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary/:id" element={<Summary />} />
        <Route path="/bookMovie/:name" element={<BookMovie />} />
      </Routes>
    </div>
  );
};

export default App;
