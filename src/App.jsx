import React from "react";
import "./App.css";
import MainPage from "./Stores/Pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Ac from "./Stores/Pages/Ac";
import Computer from "./Stores/Pages/Computer";
import Mobiles from "./Stores/Pages/Mobiles";
import MWatches from "./Stores/Pages/MWatches";
import MenFashion from "./Stores/Pages/MenFashion";
import WomenFashion from "./Stores/Pages/WomenFashion";
import Furniture from "./Stores/Pages/Furniture";
import ScrollToTop from "./ScrollToTop";
import MobilePage from "./Stores/Components/SinglePages/MobilePage";
import WatchesPage from "./Stores/Components/SinglePages/WatchesPage";
import ComputerPage from "./Stores/Components/SinglePages/ComputerPage";
import FurniturePage from "./Stores/Components/SinglePages/FurniturePage";
import MenPage from "./Stores/Components/SinglePages/MenPage";
import WomenPage from "./Stores/Components/SinglePages/WomenPage";
import AcPage from "./Stores/Components/SinglePages/AcPage";
import UserCart from "./Stores/UserCart";
import Login from "./Stores/Components/Login/Login";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Acmain" element={<Ac />} />
        <Route path="/Men" element={<MenFashion />} />
        <Route path="/women" element={<WomenFashion />} />
        <Route path="/Furntiure" element={<Furniture />} />
        <Route path="/watches" element={<MWatches />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/mobiles/:id" element={<MobilePage />} />
        <Route path="/watches/:id" element={<WatchesPage />} />
        <Route path="/computer/:id" element={<ComputerPage />} />
        <Route path="/Furntiure/:id" element={<FurniturePage />} />
        <Route path="/Men/:id" element={<MenPage />} />
        <Route path="/women/:id" element={<WomenPage />} />
        <Route path="/Acmain/:id" element={<AcPage />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/User" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
