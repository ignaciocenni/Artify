"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

//mport { UploadButton } from "@uploadthing/react"
import { OurFileRouter } from "../../app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";

export default function UploadButtonPage(props) {
  const { form, setForm } = props;

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
          //   setForm({
          //     ...form,
          //     image: res.map((img) => img.fileUrl
          //     ),
          //   });
          // }


          //TODO: MODULARIZAR TODO EL CODIGO BY NAC-HITLER-EL-MAS-LINDO
          //TODO: CAMBIAR CUANDO LA BASE DE DATOS PUEDA RECIBIR MAS DE UNA IMAGEN

          setForm({
            ...form,
            image: res[0].fileUrl
            
          });
        }
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
