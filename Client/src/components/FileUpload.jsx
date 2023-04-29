import React from "react";

function FileUpload() {
  return (
   <div className='w-full mx-auto bg-slate-200'>
    <div className="max-w-6xl  p-1 flex justify-between items-center">
      <div className="w-full mx-auto p-1 text-center"> Upload your file here
      <button className="p-3 m-2 mx-12 border border-black rounded-xl bg-sky-600 text-slate-300
      hover:scale-125 duration-700">Upload</button>
      </div>
    </div>
  </div>);
}

export default FileUpload;
