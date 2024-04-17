import { Avatar, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Nav = () => {
  const navLinks = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/career"}>Career</NavLink>
    </>
  );
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center mt-6">
      <div className="mx-auto space-x-4">{navLinks}</div>
      <div className="flex gap-4">
        <Avatar
          className=""
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <RxAvatar className=" text-4xl lg:text-5xl hidden" />
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Nav;
