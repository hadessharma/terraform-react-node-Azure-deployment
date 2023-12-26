import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar";
import CreateResources from "./pages/createResources";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import RGForm from "./components/forms/rgForm";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/create/resources" element={<CreateResources />} />
        <Route path="/create/resources/rg" element={<RGForm />} />
      </Routes>
    </>
  );
}

export default App;
