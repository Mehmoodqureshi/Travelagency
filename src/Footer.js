import React from "react";

function Footer() {
  return (
    <div className="bg-black py-20 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Exclusive Section */}
        <div className="flex flex-col gap-6">
          <div className="text-neutral-50 text-2xl font-bold font-['Inter'] leading-normal tracking-wide">
            Exclusive
          </div>
          <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">
            Subscribe
          </div>
          <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
            Get 10% off your first order
          </div>
          <div className="w-full md:w-[217px] pl-4 py-3 rounded border border-neutral-50 flex items-center gap-8">
            <div className="opacity-40 text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Enter your email
            </div>
            <div className="w-6 h-6 relative"></div>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-6">
          <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">
            Support
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              exclusive@gmail.com
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              +88015-88888-9999
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-6">
          <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">
            Account
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              My Account
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Login / Register
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Cart
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Wishlist
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Shop
            </div>
          </div>
        </div>

        {/* Quick Link Section */}
        <div className="flex flex-col gap-6">
          <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">
            Quick Link
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Privacy Policy
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Terms Of Use
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              FAQ
            </div>
            <div className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              Contact
            </div>
          </div>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-6">
          <div className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7">
            Download App
          </div>
          <div className="flex flex-col gap-2">
            <div className="opacity-70 text-neutral-50 text-xs font-medium font-['Poppins'] leading-[18px]">
              Save $3 with App New User Only
            </div>
            <div className="flex gap-2">{/* Add your image components here */}</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="opacity-40 border-t border-neutral-50 my-2"></div>

      {/* Copyright Section */}
      <div className="opacity-60 flex flex-col md:flex-row justify-center items-center gap-4">
  <div className="text-white text-center text-base font-normal font-['Poppins'] leading-normal">
    Copyright Rimel 2022. All right reserved
  </div>
</div>
</div>
  );
}

export default Footer;