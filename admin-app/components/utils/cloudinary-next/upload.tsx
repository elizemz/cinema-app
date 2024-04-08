"use client";
import React, { FC } from "react";
import { CldUploadWidget, CldUploadWidgetProps } from "next-cloudinary";

type Props = {
  setFunction: (e: any) => void;
};

export const Cloudinary = ({ setFunction }: Props) => {
  const handleSuccess = (result: any) => {
    console.log("handle success", result.info.url);
    setFunction(result.info.url);
  };

  return (
    <div className="z-[100000000001]">
      <CldUploadWidget
        //   style={{ zIndex: 10000001 }}
        uploadPreset="adminCinema"
        onSuccess={handleSuccess}
      >
        {({ open }) => {
          function handleOnClick() {
            open();
          }
          return <button onClick={handleOnClick}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};
