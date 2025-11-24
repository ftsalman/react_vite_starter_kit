import PropTypes from "prop-types";
import { cn } from "../../utils/utils";


export const GreetHeader = ({ head = "", descp = "", isLoading = true,  headerClassName= "", descClassName=""  }) => {
  if (isLoading) {
    return (
      <div className="space-y-0.5">
        <div className="w-[74px] h-6 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="w-[238px] h-7 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="space-y-0.5">
      <p className={cn("text-gray-800 text",headerClassName)}>{head}</p>
      <h4 className={cn("text-xl  font-bold text-black", descClassName)}>{descp}</h4>
    </div>
  );
};

GreetHeader.propTypes = {
  head: PropTypes.string,
  descp: PropTypes.string,
  isLoading: PropTypes.bool,
  headerClassName: PropTypes.string,
  descClassName: PropTypes.string,
};
