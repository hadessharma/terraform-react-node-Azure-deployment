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
import { deleteSubscription } from "../../functions/delete";

export default function DeleteSubscriptionModal({
  isOpen,
  openModal,
  subscriptionName,
  subscriptionId,
  loadSubs,
}) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await deleteSubscription(subscriptionId);
      await loadSubs();
      setName("");
      setLoading(false);
      openModal();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <Dialog open={isOpen} handler={openModal}>
        <DialogHeader>Delete The Subscription</DialogHeader>
        <DialogBody>
          {loading ? (
            <div className="w-full h-[50px] flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <>
              <p>Are you sure you want to delete the subscription?</p>
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
            <Button
              disabled={name !== subscriptionName}
              variant="gradient"
              color="green"
              onClick={handleSubmit}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        )}
      </Dialog>
    </>
  );
}
