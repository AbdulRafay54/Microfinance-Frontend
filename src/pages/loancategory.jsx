import React from "react";
import { Link } from "react-router-dom";

const LoanInformation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 ">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Loan Information{" "}
          <span className="text-green-700">Saylani Microfinance </span>
        </h1>

        <div className="mt-8 space-y-8">
          {/* Loan Types Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-700">Types of Loans</h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a variety of loan types to cater to your needs. Below are
              the primary loan options we provide:
            </p>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Wedding Loan */}
              <li className="p-6 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800">
                  Wedding Loans
                </h3>
                <p className="mt-3 text-gray-600">
                  A Wedding Loan to help you with the expenses related to your
                  special day. We offer the following subcategories:
                </p>
                <ul className="mt-3 pl-6 list-disc text-gray-600">
                  <li>Valima</li>
                  <li>Furniture</li>
                  <li>Valima Food</li>
                  <li>Jahez</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  <strong>Maximum Loan:</strong> PKR 5 Lakh
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>Loan Period:</strong> 3 years
                </p>
              </li>

              {/* Home Construction Loan */}
              <li className="p-6 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800">
                  Home Construction Loans
                </h3>
                <p className="mt-3 text-gray-600">
                  Loans to support your home construction projects, offering
                  subcategories to fit your needs:
                </p>
                <ul className="mt-3 pl-6 list-disc text-gray-600">
                  <li>Structure</li>
                  <li>Finishing</li>
                  <li>Loan</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  <strong>Maximum Loan:</strong> PKR 10 Lakh
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>Loan Period:</strong> 5 years
                </p>
              </li>

              {/* Business Startup Loan */}
              <li className="p-6 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800">
                  Business Startup Loans
                </h3>
                <p className="mt-3 text-gray-600">
                  Get funding for your business startup with options for:
                </p>
                <ul className="mt-3 pl-6 list-disc text-gray-600">
                  <li>Buy Stall</li>
                  <li>Advance Rent for Shop</li>
                  <li>Shop Assets</li>
                  <li>Shop Machinery</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  <strong>Maximum Loan:</strong> PKR 10 Lakh
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>Loan Period:</strong> 5 years
                </p>
              </li>

              {/* Education Loan */}
              <li className="p-6 border rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800">
                  Education Loans
                </h3>
                <p className="mt-3 text-gray-600">
                  Education loans to support your or your children's educational
                  expenses. Our subcategories include:
                </p>
                <ul className="mt-3 pl-6 list-disc text-gray-600">
                  <li>University Fees</li>
                  <li>Child Fees Loan</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  <strong>Maximum Loan:</strong> Based on requirement
                </p>
                <p className="mt-3 text-gray-600">
                  <strong>Loan Period:</strong> 4 years
                </p>
              </li>
            </ul>

            <div className="flex gap-2 items-center justify-center mt-10">
              <button
                onClick={() => (window.location.href = "/applyloan")}
                className="bg-green-700 text-white py-2 px-6  text-center hover:bg-green-600 transition duration-300"
              >
                Apply Now
              </button>
            </div>
          </section>

          {/* Eligibility Requirements Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-700">
              Eligibility Requirements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The eligibility criteria may vary depending on the type of loan
              you apply for. Here are the common requirements:
            </p>
            <ul className="mt-6 list-disc pl-6 text-gray-600">
              <li>Must be at least 18 years old.</li>
              <li>Have a valid government-issued ID and proof of residence.</li>
              <li>
                For personal loans: Proof of stable income for the last 6
                months.
              </li>
              <li>For home loans: A minimum credit score of 650.</li>
              <li>Have a valid bank account for disbursement of funds.</li>
            </ul>
          </section>

          {/* Application Process Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-700">How to Apply</h2>
            <p className="mt-4 text-lg text-gray-600">
              Applying for a loan is a simple and straightforward process.
              Here's how you can apply for a loan with us:
            </p>
            <ol className="mt-6 list-decimal pl-6 text-gray-600">
              <li className="mb-4">
                Step 1: Fill out the online loan application form.
              </li>
              <li className="mb-4">
                Step 2: Submit your documents, such as proof of income and
                identification.
              </li>
              <li className="mb-4">
                Step 3: Our team will review your application and provide an
                approval decision within 2-3 business days.
              </li>
              <li className="mb-4">
                Step 4: Once approved, you will receive the funds in your bank
                account within 24 hours.
              </li>
            </ol>
          </section>

          {/* Contact Information Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-700">
              Need Assistance?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              If you have any questions about our loan offerings or the
              application process, feel free to reach out to us. We're here to
              assist you!
            </p>
            <div className="mt-6">
              <p className="text-lg text-gray-600">
                Email: info@SaylaniWelfareUSA.com
              </p>
              <p className="mt-2 text-lg text-gray-600">Phone: +923331201585</p>{" "}
              <Link to="/loancal">
                <button className="mt-8 px-6 py-3 text-white bg-green-700 hover:bg-green-600 rounded-lg shadow cursor-pointer w-full md:w-auto">
                  Calculate Loan
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoanInformation;
