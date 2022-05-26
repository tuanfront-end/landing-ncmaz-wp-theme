import React from "react";
import Logo from "components/Logo";
import Button from "components/Button";
import { CONSTANTS } from "constants/constants";

export const Nav = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 pt-6">
      <div className="flex items-center justify-between ">
        <a href="/#">
          <span className="sr-only">ncmaz</span>
          <Logo />
        </a>
        <div className="flex items-center text-sm">
          <a
            href={CONSTANTS.documentationUrl}
            className="block mr-8 font-medium hover:text-blue-500"
          >
            Docs
          </a>
          <a
            href={CONSTANTS.supportUrl}
            className="mr-8 block font-medium  hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helps
          </a>
          <a
            href={CONSTANTS.liveDemoUrl}
            className="mr-8 block font-medium  hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <abbr className="" title="Live Demo">
              Live Demo
            </abbr>
          </a>
          <Button href={CONSTANTS.purchaseUrl}>
            <span className="sm:hidden" title="Purchase now">
              Purchase now
            </span>
            <span className="hidden sm:inline">Purchase template</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
