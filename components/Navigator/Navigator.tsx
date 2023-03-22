"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Route } from "../../models";
import { ScrollLink } from "../index";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  const [open, setOpen] = useState(false);

  const isOpen = {
    ul: "bg-primary w-screen text-center md:flex flex-row justify-around",
  };

  const isClose = {
    ul: "bg-primary w-screen text-center hidden md:flex flex-row justify-around",
  };

  return (
    <>
      <header>
        <nav
          className="z-40 text-primary bg-primary flex flex-col justify-between fixed w-screen max-h-16 md:flex-row drop-shadow-md"
          style={{ marginTop: "-96px" }}
        >
          <h2 className="text-primary m-2 select-none font-heading text-3xl md:my-auto mx-6">
            <span className="text-secondary">A</span>C
          </h2>
          <div className="absolute top-0 right-1 mr-4 sm:hidden">
            <Hamburger
              direction="right"
              toggle={setOpen}
              toggled={open}
              size={24}
            />
          </div>
          <ul className={open ? isOpen.ul : isClose.ul}>
            {pathNames.map((pathName) => (
              <li
                key={pathName.path}
                className="z-50 hover:text-zinc-50 my-36 sm:my-6"
              >
                <ScrollLink pathName={pathName} setOpen={setOpen} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigator;
