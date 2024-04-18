/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ eachNews }) => {
  const {
    _id,
    rating,
    total_view,
    title,
    // author,
    // thumbnail_url,
    image_url,
    details,
  } = eachNews;

  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image_url}
          alt="card-image"
          className="h-full w-full object-cover box-border "
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="gray"
          className="mb-4 uppercase flex gap-2 items-center"
        >
          <FaEye className="text-xl" />
          {total_view}
          <div className="flex gap-2 items-center">
            <FaRegStar  className="text-xl"/>
            <p>{rating.number}</p>
          </div>
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </Typography>
        <Link to={`newsDetails/${_id}`} className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
