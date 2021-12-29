import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MarketFinance from "./pages/MarketFinance";
import Herniman from "./pages/Herniman";
import UNQ from "./pages/UNQ";
import Empower from "./pages/Empower";
import Attoe from "./pages/Attoe";
import Sleep from "./pages/Sleep";
import Seascape from "./pages/Seascape";
import Mews from "./pages/Mews";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="marketfinance" element={<MarketFinance />} />
        <Route path="herniman" element={<Herniman />} />
        <Route path="ultimate-news-quiz" element={<UNQ />} />
        <Route path="empower" element={<Empower />} />
        <Route path="attoe-aesthetics" element={<Attoe />} />
        <Route path="sleep-me-happy" element={<Sleep />} />
        <Route path="seascape" element={<Seascape />} />
        <Route path="mews" element={<Mews />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="flex bg-white dark:bg-primary text-primary dark:text-white min-h-screen">
      <SideBar />
      <main className="my-0 mx-auto">
        <div className="flex flex-col md:p-16 sm:p-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function Error() {
  return (
    <div className="h-[calc(100vh_-_8rem)]">
        <Content 
             title="404"
             optionalClass="mx-auto mb-8 text-center"
             body="There's nothing here :("
             center={true}
        />
    </div>
  );
}

export default App;
