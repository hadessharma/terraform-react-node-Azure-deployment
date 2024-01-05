import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainNavbar from "./components/navbar";
import CreateResources from "./pages/createResources";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import About from "./pages/about";
import RGForm from "./components/forms/rgForm";
import Account from "./pages/account";
import Subscription from "./pages/subscription";
import SAForm from "./components/forms/saForm";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscription/:id" element={<Subscription />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create/resources" element={<CreateResources />} />
        <Route path="/create/resources/resourcegroup" element={<RGForm />} />
        <Route path="/create/resources/storageaccount" element={<SAForm />} />
      </Routes>
    </>
  );
}

export default App;
