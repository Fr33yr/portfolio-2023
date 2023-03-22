import { Route } from "../../models";
import { ScrollLink } from "../index";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <>
      <header>
        <nav
          className="drop-shadow-md text-primary bg-primary flex flex-row justify-between fixed
        w-screen max-h-16"
          style={{ marginTop: "-96px" }}
        >
          <h2 className="text-primary my-auto mx-6 select-none font-heading text-3xl">
            AC
          </h2>
          <ul className="flex justify-around p-4 w-1/2">
            {pathNames.map((pathName) => (
              <li key={pathName.path} className="hover:text-zinc-50">
                <ScrollLink pathName={pathName} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigator;
