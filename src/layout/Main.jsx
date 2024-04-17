import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-body container mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
