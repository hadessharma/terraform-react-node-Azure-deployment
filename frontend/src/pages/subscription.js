import TrashIcon from "../components/icons/trash";

// import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { List, ListItem, Card, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Subscription() {
  //   const { id } = useParams();

  const resources = ["Resource A", "Resource B", "Resource C"];

  const handleDelete = (e, sub) => {
    e.stopPropagation();
    alert(sub);
  };

  return (
    <div className="h-[calc(100vh-80px)] p-4 flex flex-col gap-2">
      <Typography className="underline mb-3" variant="h3">
        Subscription Name :
      </Typography>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="font-semibold">
            Your Resources:
          </Typography>
          <Link to="/create/resources">
            <Button ripple={true}>Create Resource</Button>
          </Link>
        </div>
        <hr className="my-3" />
        <Card className="w-full">
          <List>
            {resources.map((res, i) => {
              return (
                <div className="w-full flex flex-row items-center justify-between gap-1">
                  <Link to={`/resource/${i}`} className="w-full py-1 pr-1 pl-4">
                    <ListItem ripple={true}>{res}</ListItem>
                  </Link>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={(e) => handleDelete(e, res)}
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
