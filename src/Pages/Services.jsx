import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../Components/PrimaryBtn";

const Services = () => {
  return (
    <>
      <section id="services" className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-mono font-bold">
                Loan Options for Every Need
              </h1>
              <div className="h-1 w-20 bg-customGreen rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">
              Choose from a variety of loan options tailored to your specific
              needs. Whether it's for a wedding, home construction, business
              startup, or education, we have flexible terms to suit your budget.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Wedding Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-[1000ms]">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE="
                    alt="Wedding Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Wedding Loans
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    PKR 5 Lakh | 3 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base">
                    Subcategories: Valima, Furniture, Valima Food, Jahez.
                  </p>
                </div>
              </Link>
            </div>
            {/* Home Construction Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-[1000ms]">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIg1dK-wyhOARCMe1wRdj3RqLfG44Yikn-kA&s"
                    alt="Home Construction Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Home Construction Loans
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    PKR 10 Lakh | 5 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base">
                    Subcategories: Structure, Finishing, Loan.
                  </p>
                </div>
              </Link>
            </div>
            {/* Business Startup Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-[1000ms]">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHdBw68SgltNMsn-1GpZRceQYIr0MfIAX6Q&s"
                    alt="Business Startup Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Business Startup Loans
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    PKR 10 Lakh | 5 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base">
                    Subcategories: Buy Stall, Advance Rent for Shop, Shop
                    Assets, Shop Machinery.
                  </p>
                </div>
              </Link>
            </div>
            {/* Education Loan Card */}
            <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 duration-[1000ms]">
              <Link to={"/loan-form"}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blog_Paytm_Education-Loan-Eligibility-Criteria-Documents-Required.jpg"
                    alt="Education Loan"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Education Loans
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Based on Requirement | 4 Years
                  </h2>
                  <p className="leading-relaxed text-black text-base">
                    Subcategories: University Fees, Child Fees Loan.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center mt-10">
            <PrimaryBtn
              routLink={"/loan-form"}
              BtnText={"Apply"}
              additinalClasses={
                " duration-300 hover:scale-105 hover:bg-green-700 bg-customGreen"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
