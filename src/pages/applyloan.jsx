
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ApplyLoan = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
    guarantors: [
      { name: "", email: "", location: "", cnic: "" },
      { name: "", email: "", location: "", cnic: "" },
    ],
    address: "",
    phoneNumber: "",
    statement: null,
    salarySheet: null,
  });
  const [showPopup, setShowPopup] = useState(false); // Control popup visibility

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle guarantor input changes
  const handleGuarantorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGuarantors = [...formData.guarantors];
    updatedGuarantors[index][name] = value;
    setFormData({ ...formData, guarantors: updatedGuarantors });
  };

  // Handle file uploads
  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (step === 1) {
      Swal.fire({
        title: 'Success!',
        text: 'An email with a temporary password has been sent to your email address.',
        icon: 'success',
        confirmButtonText: 'Okay',
        background: '#ffffff', // White background to match your theme
        color: 'black', // Green-700 text color
        confirmButtonColor: '#2f855a', // Green-700 button color
        customClass: {
          popup: 'alert-popup'
        }
      });
      setStep(2); // Move to the next step
    } else if (step === 2) {
      Swal.fire({
        title: 'Success!',
        text: 'Loan request submitted successfully!',
        icon: 'success',
        confirmButtonText: 'Next',
        background: '#ffffff', // White background to match your theme
        color: 'black', // Green-700 text color
        confirmButtonColor: '#2f855a', // Green-700 button color
        customClass: {
          popup: 'alert-popup'
        }
      });
      setStep(3); // Move to the final step
    }
  };
  

  // Generate slip (step 3)
  const generateSlip = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const appointmentDate = currentDate.toISOString().split("T")[0];
    const appointmentTime = "03:00 PM";
    const tokenNumber = "TKN-" + Math.floor(1000 + Math.random() * 9000);
    const qrData = `Token: ${tokenNumber}, Date: ${appointmentDate}, Time: ${appointmentTime}, Location: Saylani Head Office, Karachi`;
  
    const appointmentDetails = {
      date: appointmentDate,
      time: appointmentTime,
      location: "Saylani Head Office, Karachi",
    };
  
    const downloadSlip = () => {
      const doc = new jsPDF();
      doc.setFont("helvetica", "normal");
  
      doc.text("Application Slip", 105, 20, { align: "center" });
      doc.text(`Token Number: ${tokenNumber}`, 20, 40);
      doc.text(`Appointment Date: ${appointmentDetails.date}`, 20, 50);
      doc.text(`Appointment Time: ${appointmentDetails.time}`, 20, 60);
      doc.text(`Location: ${appointmentDetails.location}`, 20, 70);
  
      // QR code rendering
      const qrCanvas = document.getElementById("slip-qr-code");
      const qrImgData = qrCanvas.toDataURL("image/png");
      doc.addImage(qrImgData, "PNG", 80, 80, 50, 50);
  
      doc.save("application-slip.pdf");
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
        <div
          id="slip-content"
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Application Slip
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Token Number:</strong> {tokenNumber}
            </p>
  
            <div className="w-32 h-32 mx-auto">
              <QRCodeCanvas id="slip-qr-code" value={qrData} size={128} />
            </div>
  
            <p className="text-gray-700">
              <strong>Appointment Date:</strong> {appointmentDetails.date}
            </p>
            <p className="text-gray-700">
              <strong>Appointment Time:</strong> {appointmentDetails.time}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {appointmentDetails.location}
            </p>
          </div>
          <button
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 mt-6"
            onClick={downloadSlip}
          >
            Download Slip
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white p-4 mt-15 ">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Step 1: Proceed Action */}
        {step === 1 && (
          <div className="p-8 text-center mt-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Saylani Microfinance
            </h1>
            <p className="text-gray-600 mb-6">
              Empowering lives through affordable and accessible loans.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Apply for a Loan
            </h2>
            <button
              className="w-full max-w-xs bg-green-700 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200 shadow-lg"
              onClick={() => setShowPopup(true)}
            >
              Proceed
            </button>
          </div>
        )}

        {/* Step 2: Loan Request Submission */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Loan Application Form
            </h1>

            {/* Personal Information Section */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                📝 Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  required
                />
                <input
                  type="text"
                  name="cnic"
                  placeholder="CNIC"
                  value={formData.cnic}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  required
                />
              </div>
            </div>

            {/* Guarantors' Information Section */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                🤝 Guarantors Information
              </h2>
              {formData.guarantors.map((guarantor, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Guarantor {index + 1}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={guarantor.name}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={guarantor.email}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                      required
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={guarantor.location}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                      required
                    />
                    <input
                      type="text"
                      name="cnic"
                      placeholder="CNIC"
                      value={guarantor.cnic}
                      onChange={(e) => handleGuarantorChange(index, e)}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Optional Documents Section */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                📂 Optional Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="file"
                  name="statement"
                  onChange={handleFileUpload}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />
                <input
                  type="file"
                  name="salarySheet"
                  onChange={handleFileUpload}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 shadow-lg"
            >
              Submit Application
            </button>
          </form>
        )}

        {/* Step 3: Slip Generation */}
        {step === 3 && generateSlip()}
      </div>

      {/* Proceed Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Enter Your Details
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowPopup(false);
                setStep(2);
              }}
            >
              <input
                type="text"
                name="cnic"
                placeholder="CNIC"
                value={formData.cnic}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 shadow-lg"
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyLoan;
