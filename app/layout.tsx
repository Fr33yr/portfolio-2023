import { Montserrat, Poiret_One } from "@next/font/google";
import "../styles/tailwind-globals.css";
export const metadata = {
  title: "Agustin Cristobo - Portfolio",
  description: "Generated by Next.js",
};
import { Footer, Navigator } from "../components";
import { Routes } from "../models";

const monserrat = Montserrat({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-monserrat",
  display: "optional",
});

const poiretOne = Poiret_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin-ext"],
  variable: "--font-poiretone",
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${monserrat.variable} ${poiretOne.variable} font-sans`}
    >
      <body className="bg-primary">
        <Navigator
          pathNames={[
            Routes.HOME,
            Routes.ABOUT,
            Routes.SKILLS,
            Routes.PROJECTS,
          ]}
        />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
