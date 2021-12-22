import React from "react";
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MarketInvoice from "./pages/MarketInvoice";
import Success from "./pages/Success";

function App() {
  console.log('rendered');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="marketinvoice" element={<MarketInvoice />} />
        {/* <Route path="herniman" element={<Herniman />} />
        <Route path="unq" element={<UNQ />} />
        <Route path="empower" element={<Empower />} /> */}
        <Route path="success" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="flex bg-white dark:bg-primary text-black dark:text-white min-h-screen">
      <SideBar />
      <main className="my-0 mx-auto">
        <div className="flex flex-col md:p-16 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function Error() {
  return (
    <div className="flex flex-col ml-16">
      <Content 
          title="404"
          body={"There's nothing here :("}
      />
    </div>
  );
}

export default App;
