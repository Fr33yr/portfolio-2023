"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ScrollButton() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, section: string) => {
    e.preventDefault();
    const selection = document.querySelector(`${section}`);
    selection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className="text-primary mx-auto my-0 w-fit h-fit absolute left-0 right-0 border-transparent
      hover:border-primary border-b-4 text-3xl"
        onClick={(e) => handleScroll(e, "#about")}
      >
        <FontAwesomeIcon icon={faArrowDown} width="32" height="32" />
      </button>
    </>
  );
}

export default ScrollButton;
