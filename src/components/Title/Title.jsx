import moment from "moment";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Button } from "@material-tailwind/react";
const Title = () => {
  return (
    <div className="text-center space-y-2">
      <img src={logo} alt="logo" className="mx-auto" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      <div className="flex bg-gray-100 p-4 rounded-lg">
        <Button color="red" ripple={false} >Latest</Button>
        <Marquee>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        animi quo vero rem, delectus, debitis quos consequuntur incidunt at quia
        aliquid cum ipsum necessitatibus similique excepturi nesciunt ab laborum
        unde!
      </Marquee>
      </div>
    </div>
    
  );
};

export default Title;
