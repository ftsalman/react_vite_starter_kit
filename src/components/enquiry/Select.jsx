import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../utils/utils";
import { useToggle } from "../../hooks/useToggle";
import { IconArrowDownAlt } from "../../assets/icons/InterfaceIcons";

export const Select = ({
  options = [],
  selectedOption = null,
  onChange = () => {},
  placeholder = "Select Course",
  disabled = false,
  className = "",
  containerClassName = "",
}) => {
  const [isOpen, toggleOpen] = useToggle();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(options);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const f = options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(f);
  }, [search, options]);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        toggleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={wrapperRef} className={cn("relative w-full", containerClassName)}>
      <button
        type="button"
        disabled={disabled}
        className={cn(
          "outline-none text-start w-full px-4 py-3 min-h-12 flex items-center justify-between rounded-lg border border-gray-300 bg-white",
          className
        )}
        onClick={() => toggleOpen()}
      >
        <span className=" text-sm text-gray-400">
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <IconArrowDownAlt size="10" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full z-50 mt-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm p-2"
          style={{ maxHeight: "260px" }}
        >
          <div className="px-2 pb-2">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-gray-100 outline-none text-sm"
            />
          </div>

          {/* Options 😎 */}
          <ul className="max-h-40 overflow-y-auto no-scrollbar space-y-2">
            {filtered.map((opt, index) => (
              <li key={index}>
                <button
                  className="w-full flex items-center cursor-pointer gap-3 px-3 py-2 rounded-lg hover:bg-yellow-50"
                  onClick={() => {
                    onChange(opt);
                    toggleOpen(false);
                  }}
                >
                  {opt.image && (
                    <img
                      src={opt.image}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <span className="text-gray-700">{opt.label}</span>
                </button>
              </li>
            ))}

            {filtered.length === 0 && (
              <li className="py-4 text-center text-gray-400 text-sm">
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
