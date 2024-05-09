import { SITE_DATA } from "@/data";
import React from "react";
import QRCode from "react-qr-code";
import { SocialIcon } from "react-social-icons";
import QR from "./QR";

const Footer = () => {
  return (
    <footer
      className=" border-t-2 border-primary text-white py-8 "
      style={{
        backgroundColor: "#FF5426",
      }}
    >
      <div className="flex flex-col sm:flex-row px-4 sm:px-12 sm:justify-between items-center">
        <div className="  flex h-full flex-col text-center gap-2 max-w-sm sm:max-w-md">
          <img
            src="/images/hbm-cover.png"
            alt="Hydrogen construction"
            className=" rounded-md hidden md:inline-block min-w-40"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 px-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Scan Me</h2>
            <QR />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">Address</h2>

            <p className="">
              {SITE_DATA.contact_info.name} <br />
              {SITE_DATA.contact_info.address_lines.map((line) => (
                <span key={line}>
                  {line} <br />
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap2">
            <h1 className="text-2xl font-bold">Socials</h1>
            <div className="flex flex-row sm:flex-col flex-wrap gap-2 justify-between">
              {SITE_DATA.social_links.map((social, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <SocialIcon
                    url={social.url}
                    fgColor="#fff"
                    bgColor="#FF5426"
                    style={{ height: 40, width: 40 }}
                  />

                  <a
                    href={social.url}
                    className="text-white hidden sm:inline-block "
                  >
                    {social.username}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] my-2 border-base" />
      <p className="text-white mt-6 text-center">
        © {new Date().getFullYear()} Hydrogen Building & Maintenance LTD
      </p>
    </footer>
  );
};

export default Footer;
