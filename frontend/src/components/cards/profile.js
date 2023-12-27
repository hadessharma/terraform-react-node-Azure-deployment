import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard() {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-100">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Position
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Organization
        </Typography>
      </CardBody>
    </Card>
  );
}
