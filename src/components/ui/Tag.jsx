  import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "../../utils/utils";

const Tag = ({
  variant = "",
  size = "",
  className = "",
  label = "label",
  children,
  ...rest
}) => {
  const tagVariants = cva(
    "line-clamp-1 flex items-center justify-center font-medium w-fit",
    {
      variants: {
        variant: {
          default: "bg-gray-100 text-gray-400",
          green: "bg-green-100 text-green-400",
          blue: "bg-blue-100 text-blue-400",
          yellow: "bg-yellow-50 border border-gray-200 text-yellow-400",
          red: "bg-red-100 text-red-400",
          lime: "bg-lime-100 text-lime-400",
          gray: "bg-gray-100 text-gray-400",
          cyan: "bg-cyan-100 text-cyan-400",
          emerald: "bg-emerald-100 text-emerald-400",
          orange: "bg-orange-100 text-orange-400",
          amber: "bg-amber-100 text-amber-400",
          indigo: "bg-indigo-100 text-indigo-400",
          teal: "bg-teal-100 text-teal-400",
          slate: "bg-slate-100 text-slate-400",
        },
        size: {
          default: "",
          xs: "px-1.5 py-0.5 rounded-[4px] text-[10px]",
          sm: "px-2.5 py-0.5 rounded-[4px] text-[12px]",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  return (
    <>
      <div className={cn(tagVariants({ size, variant }), className)} {...rest}>
        {children || label}
      </div>
    </>
  );
};

Tag.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Tag;
