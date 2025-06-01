import type { ButtonProps } from "~/Types/interfaces";

function Button({ text, variant = "default", onClick }: ButtonProps) {
  const variants: Record<"default" | "hover", string> = {
    default: "bg-blue-900 hover:bg-blue-800",
    hover: "bg-gray-500 hover:bg-gray-700",
  };

  return (
    <button
      type="button"
      className={`${variants[variant]} text-white font-bold py-5 px-6 rounded`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}

export default Button;