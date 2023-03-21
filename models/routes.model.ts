export const Routes = {
  HOME: { path: "/", name: "Home" },
  ABOUT: { path: "#about", name: "About me" },
  PROJECTS: { path: "#projects", name: "Projects" },
};

export interface Route {
  path: string;
  name: string;
}
