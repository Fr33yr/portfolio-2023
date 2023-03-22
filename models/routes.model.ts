export const Routes = {
  HOME: { path: "#home", name: "Home" },
  ABOUT: { path: "#about", name: "About me" },
  PROJECTS: { path: "#projects", name: "Projects" },
};

export interface Route {
  path: string;
  name: string;
}
