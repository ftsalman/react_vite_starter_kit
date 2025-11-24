import { cn } from "../../utils/utils";
import PropTypes from "prop-types";

/**
 * A component that displays an avatar.
 *
 * @param {Object} props
 * @prop {boolean} [loading=true] - Whether the avatar is loading.
 * @prop {string} [className=""] - The class name to be applied to the avatar.
 * @prop {string} [imgUrl=null] - The image URL to be displayed in the avatar.
 * @prop {string} [fallback="/images/profile-default.png"] - The image URL to be displayed if the avatar is not loaded.
 * @prop {*} [children=null] - The children to be displayed if no image URL is provided.
 * @returns {ReactElement} - A React element representing the avatar.
 */
const Avathar = ({
  children,
  className = "",
  loading = true,
  imgUrl = null,
  fallback = "/images/profile-default.png",
  ...props
}) => {
  return (
    <div
      className={cn(
        `relative size-11 flex items-center justify-center font-semibold flex-shrink-0 rounded-full bg-gray-300`,
        className,
        loading && "animate-pulse bg-gray-300"
      )}
      {...props}
    >
      {!loading && (
        <>
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                e.target.src = fallback;
              }}
            />
          ) : (
            children
          )}
        </>
      )}
    </div>
  );
};

Avathar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  imgUrl: PropTypes.any,
  fallback: PropTypes.any,
};

export default Avathar;
