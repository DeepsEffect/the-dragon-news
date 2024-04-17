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
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  //  getting the user
  const { loginUser } = useContext(AuthContext);

  //  handle login
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <CardBody className="flex flex-col gap-4 space-y-4">
          <form onSubmit={handleSubmitLogin} className="space-y-4">
            <Input name="email" type="email" label="Email" size="lg" />
            <Input name="password" type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <Button type="submit" variant="gradient" fullWidth>
              Sign In
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <NavLink
              to={"/register"}
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
