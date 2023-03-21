export const Routes = {
  HOME: { path: "/", name: "Home" },
  ABOUT: { path: "#about", name: "About me" },
  SKILLS: { path: "#skills", name: "Skills" },
  PROJECTS: { path: "#projects", name: "Projects" },
};

export interface Route {
  path: string;
  name: string;
}
