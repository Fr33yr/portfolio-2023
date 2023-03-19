import Link from "next/link";
import { Route } from "../../models";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <>
      <nav className="flex">
        {pathNames.map((pathName) => (
          <Link className="" key={pathName.path} href={pathName.path}>
            {pathName.name}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navigator;
