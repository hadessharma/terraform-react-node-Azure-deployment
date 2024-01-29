import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "./config/firebaseAuth";
import MainNavbar from "./components/navbar";
import CreateResources from "./pages/createResources";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";
import About from "./pages/about";
import RGForm from "./components/forms/rgForm";
import Account from "./pages/account";
import Subscription from "./pages/subscription";
import SAForm from "./components/forms/saForm";
import { getCurrentUser } from "./functions/get";
import { logIn } from "./store/functions/userReducer";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loggedInuser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      async (user) => {
        if (user) {
          const idTokenResult = await user.getIdTokenResult(); //idTokenResult.token -> will be sent as header to check in middleware.
          const res = await getCurrentUser(idTokenResult.token);
          dispatch(
            logIn({
              username: res.data.data.username,
              profilePic: res.data.data.profilePic, //Token will also be stored globally
              token: idTokenResult.token,
            })
          );
        }
      },
      [dispatch]
    );

    const delay = 3000;
    const delayId = setTimeout(() => {
      unsubscribe();
    }, delay);

    return () => {
      clearTimeout(delayId); // Cancel the delayed unsubscribe if the component unmounts before the delay
      unsubscribe();
    };
  }, []);

  // console.log(Object.keys(user).length);

  return (
    <>
      <MainNavbar />
      <ToastContainer />
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
