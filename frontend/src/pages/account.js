import { Button, Typography } from "@material-tailwind/react";

import { ProfileCard } from "../components/cards/profile";

export default function Account() {
  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-row items-center justify-center">
      <div className="h-[60%] w-[40%] flex flex-col justify-center items-end">
        <ProfileCard />
      </div>
      <div className="h-[60%] flex w-[60%] flex-col pl-8 gap-2">
        <Typography className="underline" variant="h3">
          Account Details:{" "}
        </Typography>
        <Typography variant="paragraph">Total Avenue: 100 USD</Typography>
        <Typography variant="paragraph">Total Resources: 125</Typography>
        <div className="flex flex-col gap-2">
          <Typography variant="paragraph" className="underline">
            Subscriptions:
          </Typography>
          <div className="flex gap-4 items-center">
            <Typography variant="paragraph">
              <b className="font-semibold">Subscription A</b> -- 60 USD
            </Typography>
            <Button size="sm">Update</Button>
          </div>
          <div className="flex gap-4 items-center">
            <Typography variant="paragraph">
              <b className="font-semibold">Subscription B</b> -- 25 USD
            </Typography>
            <Button size="sm">Update</Button>
          </div>
          <div className="flex gap-4 items-center">
            <Typography variant="paragraph">
              <b className="font-semibold">Subscription C</b> -- 15 USD
            </Typography>
            <Button size="sm">Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
