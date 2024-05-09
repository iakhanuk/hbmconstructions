"use client"
import { SITE_DATA } from "@/data";
import React from "react";
import QRCode from "react-qr-code";

const QR = () => {
  return (
    <QRCode
      onClick={() => navigator.clipboard.writeText(SITE_DATA.url)}
      size={150}
      value={SITE_DATA.url}
      viewBox={`0 0 256 256`}
      className="bg-white p-2 rounded"
      


    />
  );
};

export default QR;
