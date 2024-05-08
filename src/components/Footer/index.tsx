import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-orange-500 text-white py-8 px-4 sm:px-12">
      <div className="flex flex-col sm:flex-row items-center">
        <div className=" flex flex-col text-center gap-2 max-w-sm sm:max-w-md">
          <img src="/images/hbm-cover.png" alt="Hydrogen construction" className=" rounded-md"  />
          <h2 className="text-2xl font-bold ">Hydrogen Building & Maintenance Ltd.</h2>
     
        </div>
      </div>
    </footer>
  );
};

export default Footer;
