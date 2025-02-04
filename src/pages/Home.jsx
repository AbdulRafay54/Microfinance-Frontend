import React from "react";
import bannerImage from "../../public/banner-image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="container mx-auto pt-20 text-gray-600 body-font h-auto min-h-[85vh] flex flex-col-reverse md:flex-row items-center mt-8">
        <div className="w-full md:w-1/2 flex flex-col gap-5 px-6 md:px-0">
          {/* Updated Text Content */}
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to the{" "}
              <span className="text-green-600">Saylani Microfinance</span>
              <br />
              Empowering Communities Through Accessible Microfinance
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              The largest NGO offering free{" "}
              <span className="text-blue-600 font-semibold">clean water</span>.
            </p>

            <p className="mt-4 text-gray-700">
              Saylani Welfare is on the ground and already working with local
              communities to assess how best to support underprivileged families
              in more than 63 areas of day-to-day lives.
            </p>
            <Link to="/applyloan">
              <button className="mt-8 px-6 py-3 text-white bg-green-700 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={bannerImage}
            alt="Banner"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;