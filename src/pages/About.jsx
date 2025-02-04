import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      {/* Section Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          About <span className="text-green-600">Saylani Microfinance</span>
        </h1>
        <p className="text-xl text-gray-600 mt-4 font-semibold">
          Empowering{" "}
          <span className="text-green-700">underprivileged communities</span>{" "}
          with accessible microfinance.
        </p>
      </section>

      {/* About Content */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 text-justify">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Saylani Microfinance is dedicated to transforming the lives of{" "}
            <span className="font-bold text-green-700">
              underprivileged communities
            </span>{" "}
            in Pakistan. Through accessible microfinance, we provide{" "}
            <span className="font-bold text-green-700">affordable loans</span>{" "}
            to help families start businesses, improve homes, and cover
            educational and medical costs, aiming to reduce{" "}
            <span className="font-bold text-green-700">poverty</span> and
            promote{" "}
            <span className="font-bold text-green-700">
              economic empowerment
            </span>
            .
          </p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our vision extends beyond financial aid, creating a foundation where{" "}
            <span className="font-bold text-green-700">education</span>,{" "}
            <span className="font-bold text-green-700">healthcare</span>, and{" "}
            <span className="font-bold text-green-700">entrepreneurship</span>{" "}
            thrive, ensuring a brighter future for generations.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647252901/website-images/static/58.jpg"
            alt="Saylani Microfinance"
            className="w-full rounded-lg shadow-lg object-cover h-auto"
          />
        </div>
      </section>

      {/* Impact Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Our Impact
        </h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed mb-8">
          Since 1999, Saylani Welfare Trust has been serving underprivileged
          communities across{" "}
          <span className="font-bold text-green-700">63 areas</span> in Pakistan
          and beyond, with over{" "}
          <span className="font-bold text-green-700">630 branches</span>{" "}
          supporting{" "}
          <span className="font-bold text-green-700">300,000 people</span>{" "}
          daily.
        </p>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Health Department",
            "Saylani Dastarkhuwan",
            "Saylani Job Bank",
            "Mother & Child Care Center",
            "Saylani Housing Scheme",
            "Kafalat Program",
          ].map((area, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <span className="text-blue-600 text-2xl font-bold mr-4">★</span>
              <p className="text-lg text-gray-600 font-semibold">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Join Us in Our Mission
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Your support can make a big difference. Help us empower families and
          communities through accessible loans and create lasting change.
        </p>
        <Link to="/applyloan">
          <button className="mt-8 px-6 py-3 text-white bg-green-700 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto">
            Apply Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
