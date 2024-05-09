import { SITE_DATA } from '@/data'
import React from 'react'

const ContactCard = () => {
  return (
    <div className="w-full flex flex-col justify-center max-w-lg  bg-primary p-12">
    <h1 className="text-4xl font-bold text-white">Contact Info</h1>
    <div className="text-white mt-4 text-lg">
      <p className="">
        {SITE_DATA.contact_info.name} <br />
        {SITE_DATA.contact_info.address_lines.map((line) => (
          <span key={line}>
            {line} <br />
          </span>
        ))}
      </p>
        <hr className="my-2 border-secondary" />
      <p>
        <span className="font-semibold">
          Phone:{" "}
          <a href={`tel:${SITE_DATA.contact_info.phone}`}>
            {SITE_DATA.contact_info.phone}
          </a>{" "}
          <br />
          Email:{" "}
          <a href={`mailto:${SITE_DATA.contact_info.email}`}>
            {SITE_DATA.contact_info.email}
          </a>
        </span>
      </p>
    </div>
  </div>

  )
}

export default ContactCard