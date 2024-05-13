import { SITE_DATA } from "@/data";
import { fetch_contact } from "@/helpers/dotCMS";
import React from "react";

const ContactCard = async () => {
  const getGeneralInfo = async () => {
    "use server";
    return await fetch_contact();
  };

  const { contact, socials } = await getGeneralInfo();

  return (
    <div className="w-full flex flex-col justify-center max-w-lg  bg-primary p-12">
      <h3 className="text-4xl font-bold text-white">Contact Info</h3>
      <div className="text-white mt-4 text-sm md:text-md lg:text-lg">
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
        <hr className="my-2 border-secondary" />
        <p className="font-semibold text-ellipsis overflow-hidden ">
          
            Phone:{" "}
            <a href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>{" "}
            <br />
            Email:{" "}
            <a className="text-ellipsis" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
         
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
