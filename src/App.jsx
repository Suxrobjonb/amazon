import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop } from "./utils";
import Sidebar from "./components/sidebar/Sidebar";
import FooterCategories from "./components/Footer-categories/Categories"
import FooterSettings from "./components/Footer-reclam/Settings"
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes/>
      <BackToTop/>
      <FooterCategories/>
      <FooterSettings/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    </>
  );
}

export default App;
