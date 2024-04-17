import { NavLink } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <div>
      <Nav></Nav>
      <Card className="w-96 mt-12 lg:mt-20 mx-auto">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Login to Your account
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <NavLink
              to={'/register'}
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </NavLink>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;