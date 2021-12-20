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

function App() {
  console.log('rendered');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="flex bg-white dark:bg-primary h-screen text-black dark:text-white">
      <SideBar />
      <main className="my-0 mx-auto">
        <div className="flex flex-col pl-16 pt-16 pr-16">
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
