import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard({ user }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-100">
        <img src={user?.profilePic} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {user?.username}
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
