import React, { useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CompanyRegistrationModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  const modalRef = useRef(null);

  return (
    <div ref={modalRef} className="fixed inset-0 bg-white bg-opacity-50 overflow-y-auto z-50 h-full w-full">
      <div className="relative top-20 mx-auto p-5 h-[50vh] w-[40vw] shadow-lg rounded-xl bg-white">
        <div className="mt-7 text-center">
          <h3 className="text-lg text-left w-[80%] leading-6 font-medium text-black">
            Welcome, just before you start listing, let’s know some more about you
          </h3>
          <div className="mt-2 px-3 py-3">
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
                  className="w-[90%] pl-5 text-black placeholder:text-gray-600 border-2 focus:border-blue-500 h-16"
                  placeholder="Enter company name"
                />
              </div>
              <div className="w-[50%] items-start">
                <p className="text-gray-700 -mb-0.5 pl-5 text-left font-semibold">Company Email</p>
                <input
                  type="text"
                  placeholder="Enter company email"
                  className="w-[90%] pl-5 text-black placeholder:text-gray-600 border-2 focus:border-blue-500 h-16"
                />
              </div>
            </div>
            <div className="w-[100%] -mx-5">
              <p className="text-gray-700 -mb-0.5 text-left font-semibold">Company Website</p>

              <input
                type="text"
                className="w-[100%] pl-5 text-black placeholder:text-gray-600 border-2 focus:border-blue-500 h-16"
              />
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationModal;
