import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

import { createResource } from "../../functions/post";

export default function SAForm() {
  const [loading, setLoading] = useState(false);
  const [saName, setSAName] = useState("");
  const [saLoc, setSALoc] = useState("");
  const [rgName, setRGName] = useState("");
  const [saTier, setSATier] = useState("");
  const [saRepli, setSARepli] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = {
        type: "sa",
        resourceName: saName,
        saLoc,
        rgName,
        saTier,
        saRepli,
        subscriptionId: "65a1211fadc307ad540f93d2",
      };
      const res = await createResource(values);
      setLoading(false);
      setSAName("");
      setSALoc("");
      setRGName("");
      setSATier("");
      setSARepli("");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col items-center justify-center">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <Typography variant="h4" className="mb-4" color="blue-gray">
            Storage account create in-progress...
          </Typography>
          <Spinner />
        </div>
      ) : (
        <Card className="flex flex-col items-center md:w-[40%] p-4 shadow-xl">
          <Typography variant="h4" color="blue-gray">
            Storage Account
          </Typography>
          <Typography
            color="gray"
            className="w-[90%] text-center mt-1 font-normal"
          >
            It contains all of your Azure Storage data objects: blobs, files,
            queues, and tables.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-3">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Storage Account Name
              </Typography>
              <Input
                value={saName}
                onChange={(e) => setSAName(e.target.value)}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Location
              </Typography>
              <Input
                value={saLoc}
                onChange={(e) => setSALoc(e.target.value)}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Resource Group Name
              </Typography>
              <Input
                value={rgName}
                onChange={(e) => setRGName(e.target.value)}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Storage Account Tier
              </Typography>
              <Input
                value={saTier}
                onChange={(e) => setSATier(e.target.value)}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Replication
              </Typography>
              <Input
                value={saRepli}
                onChange={(e) => setSARepli(e.target.value)}
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button onClick={handleSubmit} className="mt-6" fullWidth>
              Create
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}
