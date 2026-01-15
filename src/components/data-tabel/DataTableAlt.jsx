// DataTableAlt.jsx - Updated version with better alignment
import React, { Fragment, useState } from "react";
import { EmptyMessage } from "../ui/EmptyMessage";
import { cn, sortArr } from "../../utils/utils";
import { IconFilterAlt2 } from "../../assets/icons/InterfaceIcons";
import EmptyBlock from "../ui/EmptyBlock";
import { Button } from "../ui/button/Button";
import { useTranslation } from "react-i18next";

const POSITION_VARIENTS = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

const renderRowItems = (columns, dataItem, columnIndex, emptyMsg = "") => {
  return (
    <>
      {columns?.map((column) => {
        const {
          id,
          key,
          render,
          isFixed,
          isLeftFixed = true,
          align = "left",
          className,
          width,
        } = column;

        return (
          <td
            className={cn(
              "first:rounded-l-lg last:rounded-r-lg border-b border-gray-200",
              isFixed && isLeftFixed && "sticky left-0 z-20 bg-white",
              isFixed && !isLeftFixed && "sticky right-0 z-20 bg-white",
              "relative"
            )}
            key={id}
            style={{ width }}
            title={dataItem[key]}
          >
            {render ? (
              render(dataItem, column, columnIndex)
            ) : (
              <div
                className={cn(
                  "min-h-12 px-4 py-3 flex items-center text-sm",
                  POSITION_VARIENTS[align],
                  className
                )}
              >
                {dataItem[key] || <EmptyMessage icon="" message={emptyMsg} />}
              </div>
            )}
          </td>
        );
      })}
    </>
  );
};

const DataTableAlt = ({
  columns = [],
  data = [],
  onRowClick = null,
  isLoading = true,
  pagination = {
    onPrev: () => {},
    onNext: () => {},
    currPage: 1,
    totalPages: 10,
  },
  showPagination = true,
  footer = null,
  showFooter = true,
  className = "",
  emptyStateConfig = {
    containerClassName: "border-t",
  },
  containerClassName = "",
  onSort = null,
  tableClasses = {
    thead: "",
  },
  children = null,
}) => {
  const { t } = useTranslation();

  const [inlineSort, setInlineSort] = useState({
    sortKey: "",
    sortType: null,
  });

  const handleRowClick = (e, data) => {
    e.stopPropagation();
    onRowClick?.(data);
  };

  const handleSort = () => {
    const { sortKey, sortType } = inlineSort;
    if (sortType === null) return data;
    if (onSort) return onSort(sortKey, sortType, data);
    return sortArr([...data], sortKey, sortType);
  };

  const handleSortBtnClick = ({ isSortable, key }) => {
    if (!isSortable) return;

    let currSortType = inlineSort.sortType;

    if (currSortType === null) {
      currSortType = true;
    } else if (currSortType === true) {
      currSortType = false;
    } else {
      currSortType = null;
    }

    setInlineSort({
      sortKey: key,
      sortType: currSortType,
    });
  };

  const tableData = handleSort();

  return (
    <div
      className={cn("pt-2 w-full max-w-full max-h-full rounded-xl flex flex-col", className)}
    >
      <div
        className={cn(
          "w-full max-w-full rounded-xl  table-Scrollbar overflow-auto",
          isLoading ? "overflow-hidden" : "overflow-auto",
          containerClassName
        )}
      >
        <table className="main-table-alt min-w-full table-auto text-sm text-gray-800">
          <thead className={cn("sticky top-0 z-30 h-6 bg-[#f8f5f5]", tableClasses?.thead)}>
            <tr>
              {columns?.map((column) => {
                const {
                  id,
                  head,
                  isSortable,
                  isFixed,
                  isLeftFixed = true,
                  align,
                  key,
                  width,
                } = column;

                return (
                  <th
                    key={id}
                    onClick={() => handleSortBtnClick(column)}
                    className={cn(
                      "px-4 py-3 text-sm font-semibold text-gray-700 whitespace-nowrap",
                      isSortable && "cursor-pointer hover:bg-gray-100",
                      isFixed && isLeftFixed && "sticky left-0 z-10 bg-gray-50",
                      isFixed &&
                        !isLeftFixed &&
                        "sticky right-0 z-10 bg-gray-50",
                      POSITION_VARIENTS[align],
                      "relative group duration-150"
                    )}
                    style={{ width }}
                    title={head}
                  >
                    <div className="flex items-center gap-1">
                      <span>{head || "Empty"}</span>
                      {isSortable &&
                        inlineSort?.sortKey === key &&
                        inlineSort?.sortType !== null && (
                          <span
                            className={cn(
                              "transition-transform duration-200",
                              inlineSort?.sortType === true
                                ? "rotate-180"
                                : "rotate-0"
                            )}
                          >
                            <IconFilterAlt2 size="10" />
                          </span>
                        )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              Array.from({ length: 20 }, (_, index) => (
                <Fragment key={index}>
                  <tr className="bg-gray-50 animate-pulse">
                    {columns?.map((_, colIndex) => (
                      <td key={colIndex} className="px-4 py-3">
                        <div className="h-4 bg-gray-200 rounded"></div>
                      </td>
                    ))}
                  </tr>
                </Fragment>
              ))
            ) : tableData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8">
                  <EmptyBlock
                    showPrimaryBtn={!!emptyStateConfig?.onPrimaryClick}
                    title={t("emptyblocks.nodatafound")}
                    {...emptyStateConfig}
                  />
                </td>
              </tr>
            ) : (
              tableData?.map((data, index) => (
                <tr
                  key={index}
                  onClick={(e) => handleRowClick(e, data)}
                  className={cn(
                    "hover:bg-gray-50 transition-colors duration-150",
                    onRowClick && "cursor-pointer"
                  )}
                >
                  {renderRowItems(columns, data, index, "notavailable")}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showFooter && (
        <div className="sticky inset-x-0 bottom-0 z-30 p-4 flex flex-col gap-4 border-t border-gray-200 bg-white">
          {footer}
          {showPagination && (
            <div className="flex items-center justify-between gap-4 bg-white">
              <p className="text-sm text-gray-700">
                Page {pagination?.currPage || 1} of{" "}
                {pagination?.totalPages || 1}
              </p>
              <div className="flex items-center  gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    pagination?.onPrev();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={pagination?.currPage <= 1}
                >
                  Previous
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    pagination?.onNext();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={pagination?.currPage >= pagination?.totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DataTableAlt;
