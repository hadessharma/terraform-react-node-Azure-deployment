import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { createResource } from "../../functions/post";

export default function RGForm() {
  const [rgName, setRGName] = useState("");
  const [rgLoc, setRGLoc] = useState("");
  const handleSubmit = () => {
    const values = { type: "rg", rgName, rgLoc };
    createResource(values);
    // console.log(rgName + "-" + rgLoc);
  };
  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col items-center justify-center">
      <Card className="flex flex-col items-center md:w-[25%] p-4 shadow-xl">
        <Typography variant="h4" color="blue-gray">
          Resource Group
        </Typography>
        <Typography
          color="gray"
          className="w-[90%] text-center mt-1 font-normal"
        >
          A container that holds related resources for an Azure solution.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Resource Group Name
            </Typography>
            <Input
              value={rgName}
              onChange={(e) => setRGName(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Location
            </Typography>
            <Input
              value={rgLoc}
              onChange={(e) => setRGLoc(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
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
    </div>
  );
}
