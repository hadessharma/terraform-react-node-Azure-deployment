import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ResourceCard({ name, desc, img, link }) {
  return (
    <Card className="mt-6 w-[17rem]">
      <CardHeader className="relative h-[10rem] bg-[#e0e0e0]">
        <img
          src={img}
          alt="card-image"
          className="w-full h-full object-center"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography variant="paragraph" className="text-sm">
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 mt-auto">
        <Link to={link}>
          <Button>Create</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
