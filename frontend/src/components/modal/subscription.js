import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { createSubscription } from "../../functions/post";

export default function SubscriptionModal({ isOpen, openModal }) {
  const [subscriptionId, setSubscriptionId] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await createSubscription({
        subscriptionId,
        tenantId,
        clientId,
        clientSecret,
      });
      //       console.log(res.data);
      //       setSubscriptionId("");
      //       setClientId("");
      //       setClientSecret("");
      //       setTenantId("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Dialog open={isOpen} handler={openModal}>
        <DialogHeader>Add New Subscription</DialogHeader>
        <DialogBody>
          A logical container used to provision related business or technical
          resources in Azure.
          <hr className="my-2" />
          <p>Please provide the following below details: </p>
          <div className="my-3 w-[80%] flex flex-col items-center justify-between gap-3">
            <div className="w-full">
              <Input
                label="Subscription ID"
                value={subscriptionId}
                onChange={(e) => setSubscriptionId(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Input
                label="Tenant ID"
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Input
                label="Client ID"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Input
                label="Client Secret"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
              />
            </div>
          </div>
          <a
            className="text-xs text-red-500"
            target="_blank"
            rel="noreferrer"
            href="https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/service_principal_client_secret"
          >
            Click to know how to get these details.
          </a>
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
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
