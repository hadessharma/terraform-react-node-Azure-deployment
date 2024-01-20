import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { auth } from "../../config/firebaseAuth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getCurrentUser } from "../../functions/get";
import { logIn } from "../../store/functions/userReducer";

export default function LoginModal({ isOpen, openModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log(userCredential._tokenResponse);
        const idTokenResult = userCredential._tokenResponse;
        const res = await getCurrentUser(idTokenResult.idToken);
        dispatch(
          logIn({
            username: res.data.data.username,
            profilePic: res.data.data.profilePic,
            token: idTokenResult.idToken,
          })
        );
        setLoading(false);
        setEmail("");
        setPassword("");
        openModal();
        toast.success("Logged In Successfully.");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        openModal();
        toast.error(error.message);
      });
  };

  return (
    <Dialog open={isOpen} handler={openModal}>
      <DialogHeader>Login</DialogHeader>
      <DialogBody>
        {loading ? (
          <div className="w-full h-[250px] flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="my-3 w-[80%] flex flex-col items-center justify-between gap-3">
              <div className="w-full">
                <Input
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Input
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
      </DialogBody>
      {!loading && (
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={openModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Login</span>
          </Button>
        </DialogFooter>
      )}
    </Dialog>
  );
}
