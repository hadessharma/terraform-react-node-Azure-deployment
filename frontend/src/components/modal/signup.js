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
import { auth } from "../../config/firebaseAuth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function SignUpModal({ isOpen, openModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log(user.email);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setUser(userCredential.user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

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
