"use client";

import "@uploadthing/react/styles.css";

import { OurFileRouter } from "../../app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";

export default function UploadButtonPage(props) {
  const { form, setForm } = props;

  return (
    <div className="flex flex-col items-center justify-start">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
        
          if (res) {
            setForm({
              ...form,
              image: res.map((image)=>(image.fileUrl))
            });
          }
        
          
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
