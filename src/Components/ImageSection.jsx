import React from "react";

const ImageSection = ({image}) => {
  return (
    <div>
      {image && (
        <div className="w-[50%]">
          <img
            src={image}
            alt="Detail Section"
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageSection;
