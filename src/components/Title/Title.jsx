import moment from "moment";
import logo from "../../assets/logo.png";
const Title = () => {
  return (
    <div className="text-center space-y-2">
      <img src={logo} alt="logo" className="mx-auto" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Title;
