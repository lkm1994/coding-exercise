import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsLister from "../container/NewsLister/index";
import NewsListerResult from "../container/NewsResult/index";
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<NewsLister />} />
        <Route path={"/news-lister"} element={<NewsLister />} />{" "}
        <Route
          path={"/news-lister-search-list"}
          element={<NewsListerResult />}
        />{" "}
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
