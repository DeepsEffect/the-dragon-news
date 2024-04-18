import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const NewsLayout = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  //  fetch categories
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //  fetch news
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <section className="px-5 py-10 dark:bg-gray-100 dark:text-gray-800">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <span>
              <h2 className="font-bold">All Categories</h2>
            </span>
            {categories.map((category, idx) => (
              <Link to={category.id} key={idx}>
                {category.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-600">
              <div className="w-1/2 h-full dark:bg-violet-600"></div>
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-between w-full"
            >
              <span className="text-xs font-bold tracking-wider uppercase">
                See more exclusives
              </span>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 strokeCurrent dark:text-violet-600"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative flex-col space-y-4 lg:flex-row col-span-12 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
          {news.map((eachNews) => (
            <NewsCard eachNews={eachNews} key={eachNews._id}></NewsCard>
          ))}
        </div>
        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
          <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-600">
            <button
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-600"
            >
              Latest
            </button>
            <button
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 dark:border- dark:text-gray-600"
            >
              Popular
            </button>
          </div>
          <div className="flex flex-col divide-y dark:divide-gray-300">
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/244x324"
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Aenean ac tristique lorem, ut mollis dui.
                </a>
                <p className="mt-auto text-xs dark:text-gray-600">
                  5 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                  >
                    Politics
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/245x325"
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Nulla consectetur efficitur.
                </a>
                <p className="mt-auto text-xs dark:text-gray-600">
                  14 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                  >
                    Sports
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/246x326"
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Vitae semper augue purus tincidunt libero.
                </a>
                <p className="mt-auto text-xs dark:text-gray-600">
                  22 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                  >
                    World
                  </a>
                </p>
              </div>
            </div>
            <div className="flex px-1 py-4">
              <img
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/247x327"
              />
              <div className="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="font-serif hover:underline"
                >
                  Suspendisse potenti.
                </a>
                <p className="mt-auto text-xs dark:text-gray-600">
                  37 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline"
                  >
                    Business
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLayout;
