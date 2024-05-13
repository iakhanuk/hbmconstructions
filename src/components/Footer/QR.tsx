"use client"
import { SITE_DATA } from "@/data";
import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
  const url = SITE_DATA.meta_data.url
  return (
    <QRCode
      onClick={() => navigator.clipboard.writeText(url)}
      size={150}
      value={url}
      viewBox={`0 0 256 256`}
      className="bg-white p-2 rounded"
      


    />
  );
};

export default QR;
