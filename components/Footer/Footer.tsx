"use client";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const copyEmail = (t: any) => {
    navigator.clipboard.writeText("cristoboagustin@gmail");
    toast.dismiss(t.id);
  };

  const showEmail = () => {
    toast.custom(
      () => (
        <div className="bg-primary text-secondary border-2 border-primary rounded-lg px-4 py-2">
          cristoboagustin@gmail
          <button
            onClick={(t) => copyEmail(t)}
            className="cursor-pointer ml-2 px-1 bg-primary text-primary border-primary border-2"
          >
            copy
          </button>
        </div>
      ),
      {
        duration: 9000,
      }
    );
  };

  return (
    <footer className="text-zinc-50 border-t-2 border-zinc-50 mx-12 flex flex-col md:flex-row justify-between">
      <p className="pt-6 mx-auto md:py-4">
        Updated 2023{" "}
        <span className="text-transparent border-l-2 border-primary ml-1 select-none">
          |
        </span>{" "}
        Builded with next 13
      </p>
      <ul className="py-12 mx-auto md:py-4 flex flex-row">
        <li>
          <a
            href="https://www.linkedin.com/in/agustin-cristobo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 hover:text-primary"
          >
            <FontAwesomeIcon icon={faLinkedin} height={32} width={32} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AgustinCristobo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 hover:text-primary"
          >
            <FontAwesomeIcon icon={faTwitter} height={24} width={24} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Fr33yr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 hover:text-primary"
          >
            <FontAwesomeIcon icon={faGithub} height={24} width={24} />
          </a>
        </li>
        <li>
          <Toaster position="bottom-center" />
          <a
            href="mailto:cristoboagustin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 hover:text-primary"
            onClick={showEmail}
          >
            <FontAwesomeIcon icon={faEnvelope} height={24} width={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
