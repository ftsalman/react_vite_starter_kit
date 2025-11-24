import React, { Fragment, useState } from "react";
import  {EmptyMessage}  from '../ui/EmptyMessage'
import { cn, sortArr } from "../../utils/utils";
import { IconFilterAlt2 } from "../../assets/icons/InterfaceIcons";
import EmptyBlock from "../ui/EmptyBlock";
import { Button } from "../ui/button/Button";
import { useTranslation } from "react-i18next";
import { POSITION_VARIENTS } from "../../utils/TableUtils/TableUtils";
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
          align,
          className,
        } = column;

        return (
          <td
            className={`fixed-td first:rounded-l-[10px] last:rounded-r-[10px]  ${
              isFixed && isLeftFixed
                ? "sticky left-0 z-20"
                : isFixed && !isLeftFixed && "sticky right-0 z-20"
            } relative w-inherit`}
            key={id}
            title={dataItem[key]}
          >
            {render ? (
              render(dataItem, column, columnIndex)
            ) : (
              <div
                className={cn(
                  `min-h-8 min-w-[200px] max-w-[300px] px-4 py-2 flex items-center text-xs ${POSITION_VARIENTS[align]}`,
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

  // new

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
    sortType: null, // true | false | null
  });

  const handleRowClick = (e, data) => {
    e.stopPropagation();
    if (!onRowClick) return;
    onRowClick?.(data);
  };

  const handleSort = () => {
    const { sortKey, sortType } = inlineSort;
    if (sortType === null) return data;
    if (onSort) {
      return onSort(sortKey, sortType, data);
    }
    return sortArr([...data], sortKey, sortType);
  };

  const handleSortBtnClick = ({ isSortable, key }) => {
    if (!isSortable) return false;

    let currSortType = inlineSort.sortType;

    if (currSortType === null) {
      currSortType = true;
    } else if (currSortType === true) {
      currSortType = false;
    } else if (currSortType === false) {
      currSortType = null;
    }

    setInlineSort((prev) => ({
      ...prev,
      sortKey: key,
      sortType: currSortType,
    }));
  };

  const tableData = handleSort();

  return (
    <>
      <div
        className={cn(
          `pt-2 w-full max-w-full max-h-full rounded-xl flex flex-col`,
          className
        )}
      >
        <div
          className={cn(
            `px-4 w-full max-w-full max-h-full rounded-xl overflow-auto table-Scrollbar ${
              isLoading ? "overflow-hidden" : "overflow-auto"
            }`,
            containerClassName
          )}
        >
          <table className="main-table-alt min-w-full table-auto text-sm text-[#2B1700]">
            <thead
              className={cn(
                "sticky top-0 z-30 h-10  bg-gary-200 border-b border-gray-200",
                tableClasses?.thead
              )}
            >
              <tr className="">
                {columns?.map((column) => {
                  const {
                    id,
                    head,
                    isSortable,
                    isFixed,
                    isLeftFixed = true,
                    align,
                    key,
                  } = column;
                  return (
                    <th
                      key={id}
                      onClick={() => handleSortBtnClick(column)}
                      className={`${isSortable && "cursor-pointer"} ${
                        isFixed && isLeftFixed
                          ? "sticky left-0 z-10 bg-[#F8FAFC]"
                          : isFixed &&
                            !isLeftFixed &&
                            "sticky right-0 z-30 bg-[#F8FAFC]"
                      } relative  whitespace-nowrap group text-left duration-300`}
                      title={head}
                    >
                      <div className={` font-semibold text-[#030229]`}>
                        {head || "Empty"}
                      </div>
                      {isSortable &&
                        inlineSort?.sortKey === key &&
                        inlineSort?.sortType !== null && (
                          <span
                            className={`flex-shrink-0 ${
                              {
                                true: "rotate-180",
                                false: "rotate-0",
                                null: "rotate-0",
                              }[inlineSort?.sortType]
                            }`}
                          >
                            <IconFilterAlt2 size="9" />
                          </span>
                        )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  {Array.from({ length: 20 }, (_, index) => {
                    return (
                      <Fragment key={index}>
                        <tr className=" h-[5px]"></tr>
                        <tr className=" bg-gray-300 animate-pulse rounded-lg">
                          {columns?.map((_, index) => (
                            <td
                              key={index}
                              className="h-11 px-4 py-2 first:rounded-l-[10px] last:rounded-r-[10px]"
                            ></td>
                          ))}
                        </tr>
                        <tr className="h-[5px] hidden last:table-row"></tr>
                      </Fragment>
                    );
                  })}
                </>
              ) : tableData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length}>
                    <EmptyBlock
                      showPrimaryBtn={!!emptyStateConfig?.onPrimaryClick}
                      title={t("emptyblocks.nodatafound")}
                      {...emptyStateConfig}
                    />
                  </td>
                </tr>
              ) : (
                <>
                  {children ? (
                    children({
                      data: tableData,
                      onRenderItems: renderRowItems,
                    })
                  ) : (
                    <>
                      {tableData?.map((data, index) => {
                        return (
                          <Fragment key={index}>
                            <tr className="h-[5px] first:sr-only"></tr>

                            <tr
                              onClick={(e) => handleRowClick(e, data)}
                              className={`min-h-11 ${
                                onRowClick &&
                                "cursor-pointer hover:bg-gray-100 clickable-row"
                              } duration-300`}
                            >
                              {renderRowItems(
                                columns,
                                data,
                                index,
                                "notavailable"
                              )}
                            </tr>
                            <tr className="h-[5px] hidden last:table-row"></tr>
                          </Fragment>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showFooter && (
        <div className="sticky inset-x-0 bottom-0 z-30 p-4 flex flex-col gap-4 border-t border-gray-200 bg-white">
          {footer}
          {showPagination && (
            <div className="flex items-center justify-between gap-4 bg-white">
              <p className="text-sm font-medium text-gray-500">
                Page {pagination?.currPage || 1}
              </p>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  title="Previous Page"
                  onClick={() => {
                    pagination?.onPrev();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={pagination?.currPage < 2}
                >
                  Previos
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  title="Next Page"
                  onClick={() => {
                    pagination?.onNext();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={isLoading}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 
      <div className="p-4 w-full overflow-x-auto bg-white rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-4">
          <h2 className="text-xl font-semibold">
            {TableHeader} <span className="text-gray-400">{count}</span>
          </h2>
          <div className="flex  gap-2 items-center">
            <PageSearchBar />
            <Button variant="secondary" className="bg-black text-white ">
              <IconSort />
              <span className="hidden lg:block">Filter</span>
            </Button>
          </div>
        </div>

        {!data?.length ? (
          <>
            <EmptyBlocks />
          </>
        ) : (
          <div className="relative mt-4">
            <div className="container overflow-auto lg:overscroll-contain  w-full max-h-[400px] flex flex-grow transition-all duration-300">
              <table className="w-full text-sm border-collapse">
                <thead className="sticky top-0 z-30 ">
                  <tr>
                    {columns.map((column) => {
                      const {
                        id,
                        head,
                        isSortable,
                        isFixed,
                        isLeftFixed = true,
                        align = "left",
                        key,
                      } = column;

                      return (
                        <th
                          key={id}
                          onClick={""}
                          //     className={`${
                          //       isSortable
                          //         ? "cursor-pointer hover:bg-[#F8FAFC]"
                          //         : ""
                          //     }
                          //   ${
                          //     isFixed && isLeftFixed
                          //       ? "sticky left-0 z-10 bg-[#F8FAFC]"
                          //       : isFixed && !isLeftFixed
                          //       ? "sticky right-0 z-30 bg-[#F8FAFC]"
                          //       : ""
                          //   }
                          //  relative border-b border-gray-200 w-full whitespace-nowrap text-${align} group duration-300`}
                          className={`text-left p-2 relative border-b border-gray-200 w- whitespace-nowrap text-${align} group duration-300`}
                          title={head}
                        >
                          <div
                            className={`flex items-center gap-3 px-1 py-2 pb-3.5 ${
                              POSITION_VARIENTS[align] || "justify-start"
                            }`}
                          >
                            <p className="font-semibold text-[#030229]">
                              {head || "empty"}
                            </p>
                            {isSortable && inlineSort?.sortKey === key && (
                              <span
                                className={`flex-shrink-0 ${
                                  {
                                    true: "rotate-180",
                                    false: "rotate-0",
                                    null: "rotate-0",
                                  }[inlineSort?.sortType]
                                }`}
                              >
                                <IconFilterAlt2 size="9" />
                              </span>
                            )}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <>
                      {Array.from({ length: 20 }, (_, index) => {
                        return (
                          <Fragment key={index}>
                            <tr className="h-[10px]"></tr>
                            <tr className="bg-gray-300 animate-pulse rounded-lg">
                              {columns?.map((_, index) => (
                                <td
                                  key={index}
                                  className="h-11 px-4 py-2 first:rounded-l-[10px] last:rounded-r-[10px]"
                                ></td>
                              ))}
                            </tr>
                            <tr className="h-[10px] hidden last:table-row"></tr>
                          </Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {tableData?.map((data, index) => {
                        return (
                          <>
                            <tr className="h-[10px] first:sr-only"></tr>
                            <tr
                              key={index}
                              onClick={(e) => handleRowClick(e, data)}
                              className={`min-h-11 bg-white ${
                                onRowClick &&
                                "cursor-pointer hover:bg-gray-100 clickable-row"
                              } duration-300`}
                            >
                              {columns?.map((column) => {
                                const {
                                  id,
                                  key,
                                  render,
                                  isFixed,
                                  isLeftFixed = true,
                                  align,
                                } = column;
                                return (
                                  <td
                                    className={`fixed-td first:rounded-l-[10px] last:rounded-r-[10px]  ${
                                      isFixed && isLeftFixed
                                        ? "sticky left-0 z-20"
                                        : isFixed &&
                                          !isLeftFixed &&
                                          "sticky right-0 z-20"
                                    } relative w-inherit`}
                                    key={id}
                                    title={data[key]}
                                  >
                                    {render ? (
                                      render(data, column)
                                    ) : (
                                      <div
                                        className={`min-h-11 min-w-[200px] max-w-[500px] line-clamp-2 px-4 py-2 flex items-center ${POSITION_VARIENTS[align]}`}
                                      >
                                        {data[key] || <p>notavailable</p>}
                                      </div>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                            <tr className="h-[10px] hidden last:table-row"></tr>
                          </>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
            {showPagination && (
              <div className="sticky inset-x-0 bottom-0 z-30 p-4 flex items-center justify-between gap-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500">
                  Page {pagination?.currPage}/ 10
                </p>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    title="Previous Page"
                    onClick={() => {
                      pagination?.onPrev();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={pagination?.currPage < 2}
                  >
                    Previos
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    title="Next Page"
                    onClick={() => {
                      pagination?.onNext();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div> */}
    </>
  );
};

export default DataTableAlt;
