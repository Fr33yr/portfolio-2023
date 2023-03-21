import { Suspense, lazy } from "react";
import { Loader, Welcome } from "../components";

const About = lazy(() => import("../components/About/About"));
const Projects = lazy(() => import("../components/Projects/Projects"));

function App() {
  return (
    <>
      <Welcome />
      <Suspense fallback={<Loader />}>
        <About />
        <Projects />
      </Suspense>
    </>
  );
}

export default App;
