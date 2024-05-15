import { SITE_DATA } from "@/data";
import React from "react";
import QRCode from "react-qr-code";
import { SocialIcon } from "react-social-icons";
import QR from "./QR";
import { fetch_contact } from "@/helpers/dotCMS";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const getGeneralInfo = async () => {
    "use server";
    return await fetch_contact();
  };

  const { contact, socials } = await getGeneralInfo();

  return (
    <footer className=" border-t-2 border-secondary-dark text-white py-8 bg-primary ">
      <div className="flex flex-col sm:flex-row px-4 sm:px-12 sm:justify-between items-center">
        <div className="  flex h-full flex-col text-center gap-2 max-w-sm sm:max-w-md">
          <Image
            src="/images/hbm-cover.png"
            alt="Hydrogen construction"
            className=" rounded-md hidden md:inline-block min-w-40 "
            height={300}
            width={300}
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
              {contact.name} <br />
            </p>
            <p>
              {contact.address.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap2">
            <h3 className="text-2xl font-bold">Socials</h3>
            <div className="flex flex-row sm:flex-col flex-wrap gap-2 justify-between">
              {socials.map((social, index) => (
                <div key={social.url} className="flex gap-2 items-center">
                  <SocialIcon
                    url={social.url}
                    fgColor="#fff"
                    bgColor="transparent"
                    style={{ height: 40, width: 40 }}
                  />

                  <Link
                    href={social.url}
                    className="text-white hidden sm:inline-block "
                  >
                    {social.username}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] my-2 border-base" />
      <p className="text-white mt-6 text-center">
        © 2020 Hydrogen Building & Maintenance LTD
      </p>
    </footer>
  );
};

export default Footer;
