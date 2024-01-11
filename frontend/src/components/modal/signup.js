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
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/functions/userReducer";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebaseAuth";
import { createUser } from "../../functions/post";

export default function SignUpModal({ isOpen, openModal }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.loggedInuser);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const idTokenResult = userCredential._tokenResponse;
        const response = await createUser(userName, email, password);
        dispatch(
          logIn({
            username: response.data.data.username,
            profilePic: response.data.data.profilePic,
            token: idTokenResult.idToken,
          })
        );
        setLoading(false);
        setUserName("");
        setPassword("");
        setEmail("");
        openModal();
        toast.success("User registered successfully.");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        openModal();
        toast.error(error.message);
      });
  };

  return (
    <Dialog open={isOpen} handler={openModal}>
      <DialogHeader>Sign Up</DialogHeader>
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
                  label="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
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
            <span>Sign Up</span>
          </Button>
        </DialogFooter>
      )}
    </Dialog>
  );
}
