import type { SkipLinkProps } from "~/Types/interfaces";

export const SkipLink = ({
    targetId = "contenidos",
    label = "Saltar al contenido principal",
    className = "",
}: SkipLinkProps) => {
    return (
        <a
      href={`#${targetId}`}
      className={`
        sr-only focus:not-sr-only
        fixed top-4 left-4
        bg-blue-900 text-white
        px-5 py-3 rounded-md
        inline-block max-w-max
        font-semibold shadow-md
        focus:m-6 focus:p-4
        focus:outline-none 
        transition transform
        focus:scale-105
        z-50
        ${className}
      `}
    >
            {label}
        </a>
    );
};
