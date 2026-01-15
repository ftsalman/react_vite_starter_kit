import PropTypes from "prop-types";
import {
  IconBin,
  IconCancel2,
  IconEdit,
  IconRefresh,
} from "../../assets/icons/interfaceIcons2";
import { Button } from "../ui/button/Button";
import { cn } from "../../utils/utils";

export const ActionsCell = ({ data = null, actions = {}, className = "" }) => {
  return (
    <>
      <div className={cn("px-4 py-2 flex justify-center gap-2", className)}>
        {actions?.renew && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions?.renew(data);
            }}
          >
            <IconRefresh />
          </Button>
        )}

        {actions?.cancel && (
          <Button
            className="size-8 p-0.5 text-red-600 focus:shadow-red-100"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions?.cancel(data);
            }}
          >
            <IconCancel2 size="20" />
          </Button>
        )}

        {actions?.edit && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.edit(data);
            }}
          >
            <IconEdit />
          </Button>
        )}

        {actions?.delete && (
          <Button
            className={cn(
              "size-8 p-0.5 text-red-600 focus:shadow-red-100",
              actions?.viewClassName
            )}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.delete(data);
            }}
            title="Delete"
          >
            <IconBin />
          </Button>
        )}
        
         {actions?.admit && (
        <Button
          size="sm"
          className="bg-green-500 text-white px-4 py-1 h-7 rounded-md hover:bg-green-600"
          onClick={(e) => {
            e.stopPropagation();
            actions.admit(data);
          }}
        >
          ADMIT
        </Button>
      )}
      </div>
    </>
  );
};

ActionsCell.propTypes = {
  actions: PropTypes.object,
  data: PropTypes.any,
  className: PropTypes.string,
};
