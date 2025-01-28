import React from "react";

const About = () => {
  return (
    <div className="container mx-auto pt-20 px-4">
      {/* Section Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          About <span className="text-green-600">Saylani Microfinance</span>
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Empowering underprivileged communities with accessible microfinance.
        </p>
      </section>

      {/* About Content */}
      <section className="flex flex-col md:flex-row gap-12">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            Saylani Microfinance is dedicated to transforming the lives of{" "}
            <span className="font-bold">underprivileged communities</span> in
            Pakistan. Through accessible microfinance, we provide{" "}
            <span className="font-bold">affordable loans</span> to help families
            start businesses, improve homes, and cover educational and medical
            costs, aiming to reduce <span className="font-bold">poverty</span> and
            promote <span className="font-bold">economic empowerment</span>.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            With over two decades of work, Saylani Welfare Trust has supported{" "}
            <span className="font-bold">thousands of families</span>, fostering{" "}
            <span className="font-bold">financial independence</span> and enabling
            individuals to live with <span className="font-bold">dignity</span> and{" "}
            <span className="font-bold">hope</span>. We focus on providing a
            platform for self-sufficiency, which is transforming lives and
            contributing to a more <span className="font-bold">equitable society</span>.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Our vision extends beyond financial aid, creating a foundation where{" "}
            <span className="font-bold">education</span>,{" "}
            <span className="font-bold">healthcare</span>, and{" "}
            <span className="font-bold">entrepreneurship</span> can thrive, ensuring a
            brighter future for generations.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647252901/website-images/static/58.jpg"
            alt="Saylani Microfinance"
            className="w-full rounded-lg shadow-md object-cover h-full"
          />
        </div>
      </section>

      {/* Impact Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          More
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Since 1999, Saylani Welfare Trust has been serving underprivileged
          communities across <span className="font-bold">63 areas</span> in Pakistan
          and beyond, providing crucial services to marginalized populations.
        </p>
        <p className="text-lg text-gray-600 text-center mb-6">
          Founded by Hazrat Allama Maulana Muhammad Bashir Farooq, the Trust now
          operates globally, with over <span className="font-bold">630 branches</span>{" "}
          and serving more than <span className="font-bold">300,000 people</span> daily.
        </p>
        <p className="text-lg text-gray-600 text-center mb-6">
          Our efforts span across various fields, including food, healthcare, education,
          social welfare, and disaster relief, ensuring comprehensive support to those in need.
        </p>

        {/* Impact Areas */}
        <div className="flex flex-col md:flex-row justify-around gap-8">
          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="text-blue-600 text-2xl font-bold">★</span> Health
              Department
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="text-blue-600 text-2xl font-bold">★</span> Saylani
              Dastarkhuwan
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="text-blue-600 text-2xl font-bold">★</span> Saylani
              Job Bank
            </p>
          </div>
        </div>

        {/* Additional Areas */}
        <div className="flex flex-col md:flex-row justify-around gap-8 mt-6 ml-[-34px]">
          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="text-blue-600 text-2xl font-bold">★</span> Mother &
              Child Care Center
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="text-blue-600 text-2xl font-bold">★</span> Saylani
              Housing Scheme
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="text-blue-600 text-2xl font-bold">★</span> Kafalat
              Program
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-600 text-center mt-6">
          Saylani Welfare Trust continues to grow, reaching more people each day and
          improving lives. Join us in this noble cause to make the world a better
          place.
        </p>
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
        <button className="px-8 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow">
          Apply for a Loan
        </button>
      </section>
    </div>
  );
};

export default About;
