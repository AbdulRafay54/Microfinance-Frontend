import React from "react";
import bannerImage from "../../public/banner-image.jpg";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="container mx-auto pt-20 text-gray-600 body-font h-[85vh] items-center flex flex-col md:flex-row">
        <div className="px-10 md:px-0 w-full md:w-1/2 flex flex-col gap-5">
          {/* Updated Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Welcome to the{" "}
              <span className="text-green-600">Saylani Microfinance</span>
              <br />
              Empowering Communities Through Accessible Microfinance
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              The largest NGO offering free{" "}
              <span className="text-blue-600 font-semibold">clean water</span>.
            </p>
            <p className="mt-4 text-gray-600">
              Saylani Welfare is on the ground and already working with local
              communities to assess how best to support underprivileged families
              in more than 63 areas of day-to-day lives.
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow cursor-pointer">
              Apply Loan
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] mt-10 -z-40">
          <img className="bg-cover p-10" src={bannerImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
