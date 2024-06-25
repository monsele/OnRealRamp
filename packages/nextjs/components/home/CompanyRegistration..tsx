import React, { useRef } from "react";
import { DocumentUpload } from "iconsax-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CompanyRegistrationModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const modalRef = useRef(null);

  return (
    <div ref={modalRef} className="fixed inset-0 bg-white bg-opacity-50 overflow-y-auto z-50 h-full w-full">
      <div className="relative top-20 mx-auto p-5 h-[60vh] w-[40vw] shadow-lg rounded-xl bg-white">
        <div className="mt-2 text-center">
          <div className="flex flex-row justify-between">
            <h3 className="text-lg text-left w-[80%] leading-6 font-medium text-black">
              Welcome, just before you start listing, let’s know some more about you
            </h3>
            <button className="pr-5" onClick={onClose}>
              <p className="text-red-500 underline">Cancel</p>
            </button>
          </div>
          <div className="mt-2 px-3">
            <p className="text-sm text-gray-500">
              To enhance trust on our decentralized platform, we're introducing a one-time registration for property
              listers. This verifies listing authenticity, fostering a secure environment where users confidently engage
              with legitimate properties. Thank you for helping create a transparent marketplace.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center px-10">
            <div className="flex items-center gap-5 w-[40vw] px-10">
              <div className="w-[50%]">
                <p className="text-gray-700 pl-5 -mb-0.5 text-left font-semibold">Company Name</p>

                <input
                  type="text"
                  className="w-[90%] pl-5 text-black placeholder:text-gray-600 rounded-lg border-2 focus:border-blue-500 h-12"
                  placeholder="Enter company name"
                />
              </div>
              <div className="w-[50%] items-start">
                <p className="text-gray-700 -mb-0.5 pl-5 text-left font-semibold">Company Email</p>
                <input
                  type="text"
                  placeholder="Enter company email"
                  className="w-[90%] pl-5 text-black placeholder:text-gray-600 rounded-lg border-2 focus:border-blue-500 h-12"
                />
              </div>
            </div>
            <div className="w-[100%] -mx-5">
              <p className="text-gray-700 -mb-0.5 text-left font-semibold">Company Website</p>

              <input
                type="text"
                placeholder="Enter company website"
                className="w-[100%] pl-5 text-black placeholder:text-gray-600 border-2 rounded-lg focus:border-blue-500 h-12"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 py-3 justify-center items-center">
            <p className="text-gray-500 text-center font-medium">Company Government Issued License</p>
            <button className="h-16 w-[400px] rounded-lg bg-[#E9E9E9] border flex flex-row justify-center items-center">
              <DocumentUpload size="24" color="#5A82FC" variant="Bold" />
              <p className="font-semibold text-gray-500 pl-2">Max upload size 5MB </p>
            </button>
            <div className="flex flex-row">
              <p className="text-gray-500 text-center font-medium">By continuing you agree to the DestLab</p>
              <button className="text-gray-900 pl-1 font-medium underline">terms of service</button>
              <p className="text-gray-500 px-1">and</p>
              <button className="text-gray-900 pl-1 font-medium underline">privacy policy.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationModal;
