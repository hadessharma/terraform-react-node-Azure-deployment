import TrashIcon from "../components/icons/trash";

import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { List, ListItem, Card, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Home() {
  const subscriptions = ["Subscription A", "Subscription B", "Subscription C"];

  const handleDelete = (e, sub) => {
    e.stopPropagation();
    alert(sub);
  };

  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col gap-2">
      <Typography className="underline mb-3" variant="h3">
        Welcome Natalie Paisley,
      </Typography>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="font-semibold">
            Select Your Subscription:
          </Typography>
          <Button ripple={true}>+ New Subscription</Button>
        </div>
        <hr className="my-3" />
        <Card className="w-full">
          <List>
            {subscriptions.map((sub, i) => {
              return (
                <div className="w-full flex flex-row items-center justify-between gap-1">
                  <Link
                    to={`/subscription/${i}`}
                    className="w-full py-1 pr-1 pl-4"
                  >
                    <ListItem ripple={true}>{sub}</ListItem>
                  </Link>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={(e) => handleDelete(e, sub)}
                  >
                    <TrashIcon />
                  </IconButton>
                </div>
              );
            })}
          </List>
        </Card>
      </div>
    </div>
  );
}