import React, { useState } from "react";
import { ToggleButton } from "react-aria-components";

export function Toggle() {
  const [text, setText] = useState("Edita este texto");
  const [styles, setStyles] = useState({
    bold: false,
    underline: false,
    italic: false
  });

  const toggleStyle = (style: keyof typeof styles) => {
    setStyles(prev => ({ ...prev, [style]: !prev[style] }));
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 rounded-lg shadow
                   bg-white dark:bg-gray-800
                   text-gray-900 dark:text-gray-100">
      
      <div className="flex gap-2">
        <ToggleButton
          isSelected={styles.bold}
          onChange={() => toggleStyle("bold")}
          className="px-3 py-1 rounded border 
                    bg-white dark:bg-gray-700
                    border-gray-300 dark:border-gray-600
                    text-gray-800 dark:text-gray-200
                    data-[selected]:bg-blue-500 data-[selected]:text-white
                    data-[selected]:border-blue-500"
        >
          Negrita
        </ToggleButton>
        
        <ToggleButton
          isSelected={styles.underline}
          onChange={() => toggleStyle("underline")}
          className="px-3 py-1 rounded border 
                    bg-white dark:bg-gray-700
                    border-gray-300 dark:border-gray-600
                    text-gray-800 dark:text-gray-200
                    data-[selected]:bg-blue-500 data-[selected]:text-white
                    data-[selected]:border-blue-500"
        >
          Subrayado
        </ToggleButton>
        
        <ToggleButton
          isSelected={styles.italic}
          onChange={() => toggleStyle("italic")}
          className="px-3 py-1 rounded border 
                    bg-white dark:bg-gray-700
                    border-gray-300 dark:border-gray-600
                    text-gray-800 dark:text-gray-200
                    data-[selected]:bg-blue-500 data-[selected]:text-white
                    data-[selected]:border-blue-500"
        >
          Cursiva
        </ToggleButton>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 rounded border
                 bg-white dark:bg-gray-700
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div 
        className={`p-4 rounded border min-h-20
                  border-gray-200 dark:border-gray-700
                  ${styles.bold ? "font-bold" : ""}
                  ${styles.underline ? "underline" : ""}
                  ${styles.italic ? "italic" : ""}`}
      >
        {text}
      </div>
    </div>
  );
}

export default Toggle