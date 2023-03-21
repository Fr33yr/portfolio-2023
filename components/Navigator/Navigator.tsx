"use client";
import Link from "next/link";
import { Route } from "../../models";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, section: string) => {
    e.preventDefault();
    const selection = document.querySelector(`#${section}`);
    selection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <nav className="drop-shadow-md text-primary bg-primary flex flex-row justify-between">
          <h2 className="text-primary my-auto mx-6 select-none font-heading text-3xl">
            AC
          </h2>
          <ul className="flex justify-around p-4 w-1/2">
            {pathNames.map((pathName) => (
              <li key={pathName.path} className="hover:text-zinc-50">
                <Link
                  href={pathName.path}
                  onClick={(e) => handleScroll(e, pathName.name)}
                >
                  {pathName.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigator;
