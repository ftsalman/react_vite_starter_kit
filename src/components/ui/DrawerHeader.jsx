import PropTypes from "prop-types";
import { cva } from "class-variance-authority";
import { IconEdit, IconPlus } from "../../assets/icons/interfaceIcons2";
import { cn } from "../../utils/utils";

export const DrawerHeader = ({ icon, title, subtitle, className }) => {
  const icons = {
    edit: <IconEdit size={18} />,
    add: <IconPlus size={20} />,
  };

  return (
    <div className={cn("flex items-center gap-3 flex-grow", className)}>
      {icon && (
        <div className="w-max h-max">
          {/* <IconBadge className="size-10">{icons[icon] || icon}</IconBadge> */}
        </div>
      )}
      <div className="flex-grow">
        {title && (
          <h6 className="font-semibold text-primary-800 line-clamp-1">
            {title}
          </h6>
        )}
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
};

DrawerHeader.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export const IconBadge = ({ className, variant, children }) => {
  const iconBadgeVariants = cva(
    "w-12 h-12 flex items-center justify-center border-8 rounded-full",
    {
      variants: {
        variant: {
          default: "bg-blue-100 border-blue-50 text-blue-700",
          red: "bg-red-100 border-red-50 text-red-400",
          green: "bg-green-100 border-green-50 text-green-400",
          blue: "bg-blue-100 border-blue-50 text-blue-400",
          yellow: "bg-yellow-200 border-yellow-100  text-gray-800",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  return (
    <div className={cn(iconBadgeVariants({ variant, className }))}>
      {children}
    </div>
  );
};

IconBadge.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
