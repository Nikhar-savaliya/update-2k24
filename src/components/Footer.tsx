import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 pt-20 px-3 pb-36 text-sm md:text-base">
        {/* 3 columns */}
        <div className="flex flex-col col-span-1 gap-1 mx-auto">
          <h1 className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br text-gradient-to-br from-rose-500 to-violet-600">
            Faculty Coordinators
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Pranav Rathod</p>
            <p className="text-muted-foreground">Alankrita Vishwakarma</p>
            <p className="text-muted-foreground">Saifali Modi</p>
          </div>
          <h1 className="mt-6 mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br text-gradient-to-br from-rose-500 to-violet-600">
            Student Coordinators
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Zenil Dhameliya</p>
            <p className="text-muted-foreground">Kaushal Gadhiya</p>
            <p className="text-muted-foreground">Aum M Patel</p>
            <p className="text-muted-foreground">Archi Gazdar</p>
            <p className="text-muted-foreground">Mitesh Dobariya</p>
          </div>
        </div>
        <div className="col-span-1 mx-auto">
          <h1 className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br text-gradient-to-br from-rose-500 to-violet-600">
            Web Developers
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">
              <a
                href="https://github.com/dhruvinvaghani001"
                target="_blank"
                className="underline underline-offset-4"
              >
                Dhruvin Vaghani
              </a>
            </p>
            <p className="text-muted-foreground">
              <a
                href="https://github.com/nikhar-savaliya"
                target="_blank"
                className="underline underline-offset-4"
              >
                Nikhar Savaliya
              </a>
            </p>
            <p className="text-muted-foreground">
              <a
                href="https://github.com/abhiradadiya07"
                target="_blank"
                className="underline underline-offset-4"
              >
                Abhishek Radadiya
              </a>
            </p>
            <p className="text-muted-foreground">Vansh Golakiya</p>
            <p className="text-muted-foreground">Satyam Tiwari</p>
            <p className="text-muted-foreground">Dev Italiya</p>
          </div>
          <Link
            href={"https://instagram.com/updates2k24"}
            className="flex items-center justify-start mt-8 gap-1"
          >
            <Instagram className="text-muted-foreground" />
            <p className="text-muted-foreground underline">Follow us</p>
          </Link>
        </div>
        <p className="col-span-2 mt-8 text-center text-muted-foreground/70">
          @Updates 2k24 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
