import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { deleteSubscription } from "../../functions/delete";

export default function DeleteSubscriptionModal({
  isOpen,
  openModal,
  subscriptionName,
  subscriptionId,
}) {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await deleteSubscription({
        subscriptionName,
        subscriptionId,
      });
      //       console.log(res.data);
      //       setName("");
      alert(subscriptionName);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Dialog open={isOpen} handler={openModal}>
        <DialogHeader>Delete The Subscription</DialogHeader>
        <DialogBody>
          Are you sure you want to delete the subscription?
          <hr className="my-2" />
          <p className="text-sm">
            Please write the{" "}
            <b className="text-red-500">"{subscriptionName}"</b> to delete.
          </p>
          <div className="my-3 w-[80%] flex flex-col items-center justify-between gap-3">
            <div className="w-full">
              <Input
                label="Subscription Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={openModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            disabled={name !== subscriptionName}
            variant="gradient"
            color="green"
            onClick={handleSubmit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
