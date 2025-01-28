import React from "react";

const DetailSection = ({ image, heading, description }) => {
  return (
    <section className=" py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Right Text */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-3xl font-semibold mb-4">{heading}</h2>
          <p className="text-lg mb-4">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
