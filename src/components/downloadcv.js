import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import cv from "../documents/SHANE ENRIQUEZ-WEB DEV.pdf";

const handleDownloadCV = () => {
  // Replace 'my-cv.pdf' with the actual name of your CV file
  const cvUrl = cv;
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "my-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadcv = () => {
  return (
    <button className="downloadcv" onClick={handleDownloadCV}>
      Download CV <MdOutlineFileDownload />
    </button>
  );
};

export default downloadcv;
