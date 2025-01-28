import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";

const loanCategories = {
  "Wedding Loans": {
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    loanPeriod: "3 years",
  },
  "Home Construction Loans": {
    subcategories: ["Structure", "Finishing", "Furnishing"],
    maxLoan: 1000000,
    loanPeriod: "5 years",
  },
  "Business Startup Loans": {
    subcategories: [
      "Buy Stall",
      "Advance Rent for Shop",
      "Shop Assets",
      "Shop Machinery",
    ],
    maxLoan: 1000000,
    loanPeriod: "5 years",
  },
  "Education Loans": {
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
  },
};

const DynamicLoanForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    subcategory: "",
    amount: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFormData((prev) => ({
      ...prev,
      subcategory: "",
      amount: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Update submission status to true when form is submitted

    try {
      // Send POST request to API
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send formData as the request body
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Loan Application Submitted:", data);
        alert("Loan Application Submitted Successfully!");
      } else {
        alert("Failed to submit application: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting loan application:", error);
      alert("Error submitting loan application. Please try again.");
    }
  };

  const selectedLoanDetails = loanCategories[selectedCategory] || {};

  return (
    <div className="py-10 px-10 flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full px-10">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Dynamic Loan Application
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Category Select */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Select Loan Category
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select a category</option>
              {Object.keys(loanCategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <>
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* CNIC Input */}
              <div className="mb-4">
                <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
                  CNIC Number
                </label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your CNIC"
                  required
                />
              </div>

              {/* Subcategory Select */}
              <div className="mb-4">
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
                  Loan Subcategory
                </label>
                <select
                  id="subcategory"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select a subcategory</option>
                  {selectedLoanDetails.subcategories?.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div>

              {/* Loan Amount Input */}
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Loan Amount (
                  {selectedLoanDetails.maxLoan !== "Based on requirement"
                    ? `Max: PKR ${selectedLoanDetails.maxLoan.toLocaleString()}`
                    : "Based on requirement"}
                  )
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  max={
                    selectedLoanDetails.maxLoan !== "Based on requirement"
                      ? selectedLoanDetails.maxLoan
                      : undefined
                  }
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter loan amount"
                  required
                />
              </div>

              {/* Loan Period */}
              <div className="mb-4">
                <label htmlFor="period" className="block text-sm font-medium text-gray-700">
                  Loan Period
                </label>
                <input
                  type="text"
                  id="period"
                  name="period"
                  value={selectedLoanDetails.loanPeriod}
                  disabled
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center">
                <PrimaryBtn
                handleFunct={handleSubmit}
                  BtnText={isSubmitted ? "Application Submitted" : "Submit"} // Conditional button text
                  additinalClasses={`${
                    isSubmitted
                      ? "bg-gray-500 cursor-not-allowed"
                      : "duration-300 hover:scale-105 hover:bg-green-700 bg-customGreen"
                  }`} // Change button style if submitted
                  disabled={isSubmitted} // Disable the button after submission
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default DynamicLoanForm;
