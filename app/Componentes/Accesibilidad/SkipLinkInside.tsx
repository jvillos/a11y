import type { SkipLinkInsideProps } from "~/Types/interfaces";

import React from "react";


const SkipLinkInside: React.FC<SkipLinkInsideProps> = ({ href, label }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.focus({ preventScroll: true });
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="
        bg-blue-900 text-white
        px-5 py-3 rounded-md
        inline-block max-w-max
        font-semibold shadow-md
        hover:bg-blue-800 focus:bg-blue-800
        focus:outline-none focus:ring-2 focus:ring-blue-300
        transition duration-150
      "
    >
      {label}
    </a>
  );
};

export default SkipLinkInside;

