"use client"
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';

const UploadFile = () => {

  return (
    <CldUploadWidget uploadPreset="ml_default">
  {({ open }) => {
    return (
      <button className='btn btn-primary' onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
  );
};

export default UploadFile;
