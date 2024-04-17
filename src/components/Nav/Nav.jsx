import { Avatar, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import "./Nav.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/career"}>Career</NavLink>
      </li>
    </>
  );

  //handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center mt-4">
      <div className="mx-auto space-x-4">
        <ul className="flex gap-4">{navLinks}</ul>
      </div>
      <div className="flex gap-4 items-center">
        <Avatar
          className=""
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <RxAvatar className=" text-4xl lg:text-5xl hidden" />
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <NavLink to={"/login"}>
            <Button>Login</Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
