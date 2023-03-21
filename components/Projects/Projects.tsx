import { Card } from "../index";
import { data } from "../../utils/projects-data";

function Projects() {
  return (
    <section className="text-center my-36 mx-auto" id="projects">
      <h2 className="font-heading text-5xl text-zinc-50">Projects</h2>
      <hr className="w-12 h-1 bg-secondary my-4 mx-auto border-0 rounded"></hr>
      <div className="flex flex-col my-24">
        {data &&
          data.map((item) => (
            <>
              <Card data={item} />
            </>
          ))}
      </div>
    </section>
  );
}

export default Projects;
