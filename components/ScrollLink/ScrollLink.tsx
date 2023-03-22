"use client";
import Link from "next/link";
import { Route } from "../../models";

interface Props {
  pathName: Route;
  setOpen: Function;
}

function ScrollLink({ pathName, setOpen }: Props) {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, section: string) => {
    e.preventDefault();
    setOpen(false);
    const selection = document.querySelector(`${section}`);
    selection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Link
        href={pathName.path}
        onClick={(e) => handleScroll(e, pathName.path)}
      >
        {pathName.name}
      </Link>
    </>
  );
}

export default ScrollLink;
