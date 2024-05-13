"use client"
import { SITE_DATA } from "@/data";
import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
  return (
    <QRCode
      onClick={() => navigator.clipboard.writeText(typeof(window)!=undefined?window.location.href:SITE_DATA.meta_data.url)}
      size={150}
      value={SITE_DATA.meta_data.url}
      viewBox={`0 0 256 256`}
      className="bg-white p-2 rounded"
      


    />
  );
};

export default QR;
