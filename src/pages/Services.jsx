import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="services" className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          {/* Heading Section */}
          <div className="flex flex-wrap w-full mb-20 mt-32">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-mono font-bold">
                Microfinance Services for Your Needs
              </h1>
              <div className="h-1 w-20 bg-customGreen rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
              We offer tailored microfinance solutions to help you achieve your
              financial goals. From weddings to business startups, we provide
              flexible loans to suit your needs.
            </p>
          </div>

          {/* Loan Cards */}
          <div className="flex flex-wrap -m-4">
            {/* Wedding Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-300">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg h-full">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE="
                    alt="Wedding Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-[10px]">
                    Wedding Loans
                  </h3>
                  <h2 className="text-md text-gray-900 font-medium title-font mb-4">
                    PKR 5 Lakh | 3 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base mb-4">
                    Subcategories: Valima, Furniture, Valima Food, Jahez.
                  </p>
                  {/* Apply Now Button */}
                  <Link
                    to="/applyloan"
                    className="bg-green-700 text-white py-2 px-6 text-center transition duration-300 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto"
                  >
                    Apply Now
                  </Link>
                </div>
              </Link>
            </div>

            {/* Home Construction Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-300">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg h-full">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1593012672015-4fabc32c67aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Home Construction Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font  mb-[10px]">
                    Home Construction Loans
                  </h3>
                  <h2 className="text-md text-gray-900 font-medium title-font mb-4">
                    PKR 10 Lakh | 5 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base mb-4">
                    Subcategories: Structure, Finishing, Loan.
                  </p>
                  {/* Apply Now Button */}
                  <Link
                    to="/applyloan"
                    className="bg-green-700 text-white py-2 px-6 text-center transition duration-300 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto"
                  >
                    Apply Now
                  </Link>
                </div>
              </Link>
            </div>

            {/* Business Startup Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-300">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg h-full">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Business Startup Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font  mb-[10px]">
                    Business Startup Loans
                  </h3>
                  <h2 className="text-md text-gray-900 font-medium title-font mb-4">
                    PKR 10 Lakh | 5 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base mb-4">
                    Subcategories: Buy Stall, Advance Rent for Shop, Shop
                    Machinery.
                  </p>
                  {/* Apply Now Button */}
                  <Link
                    to="/applyloan"
                    className="bg-green-700 text-white py-2 px-6 text-center transition duration-300 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto"
                  >
                    Apply Now
                  </Link>
                </div>
              </Link>
            </div>

            {/* Education Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-300">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg h-full">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Education Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font  mb-[10px]">
                    Education Loans
                  </h3>
                  <h2 className="text-md text-gray-900 font-medium title-font mb-4">
                    Based on Requirement | 4 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base mb-4">
                    Subcategories: University Fees, Child Fees Loan.
                  </p>
                  {/* Apply Now Button */}
                  <Link
                    to="/applyloan"
                    className="bg-green-700 text-white py-2 px-6 text-center transition duration-300 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto"
                  >
                    Apply Now
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
