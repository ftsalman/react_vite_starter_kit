import PropTypes from "prop-types";
import { cn } from "../../utils/utils";

const Card = ({ className = "", onClick = undefined, children, ...rest }) => {
  const classess =
    onClick &&
    "hover:shadow-lg hover:shadow-gray-200 focus:shadow-lg focus:shadow-gray-200 cursor-pointer";

  return (
    <div
      onClick={onClick}
      className={cn(
        "p-4 rounded-2xl   duration-300  bg-white",
        classess,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Card;
