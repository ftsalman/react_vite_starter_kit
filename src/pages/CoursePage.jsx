import React, { useState } from "react";
import { PageToolbarGroup } from "../components/page-toolbar/PageToolbarGroup";
import { PageContainer } from "../components/ui/PageContainer";
import { PageSearchBar } from "../components/ui/PageSearchBar";
import { Button } from "../components/ui/button/Button";
import {
  IconBin,
  IconEdit,
  IconMoreVertical,
  IconPlus,
  IconSort,
} from "../assets/icons/interfaceIcons2";
import { TableHeader } from "../components/data-tabel/TableHeader";
import DataTableAlt from "../components/data-tabel/DataTableAlt";
import Avathar from "../components/ui/Avathar";
import { ActionsCell } from "../components/data-tabel/DataTableCell";

export const CoursePage = () => {
  const TABLE_COLUMNS = [
    {
      id: "1",
      head: "#",
      key: "ID",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "2",
      head: "Course Name",
      key: "COUESENAME",
      isSortable: true,
      isFixed: false,
      render: ({ COURSENAME, COUSRSE_IMG }) => (
        <div className=" flex items-center p-4 gap-1 min-w-0">
          <Avathar
            className="size-8 shrink-0"
            imgUrl={COUSRSE_IMG}
            loading={false}
          />
          <span className="line-clamp-2 text-sm truncate min-w-0">
            {COURSENAME}
          </span>
        </div>
      ),
    },
    {
      id: "3",
      head: "Category",
      key: "CATEGORY",
      isSortable: true,
      isFixed: false,
      render: ({ CATEGORY }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            CATEGORY === "Photography"
              ? "bg-purple-100 text-purple-600"
              : CATEGORY === "Web Development"
              ? "bg-orange-100 text-orange-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {CATEGORY}
        </span>
      ),
    },
    {
      id: "4",
      head: "Status",
      key: "STATUS",
      isSortable: true,
      isFixed: false,
      render: ({ STATUS }) => {
        const isActive = STATUS === "Active";

        return (
          <Button
            variant="secondary"
            size="sm"
            className={`flex items-center gap-2 px-2 py-0.5 h-6 rounded-lg ${
              //   isActive
              //     ? "bg-green-100 text-green-700"
              //     : "bg-red-100 text-red-600"
              ""
            }`}
          >
            <span
              className={`w-2 h-2  whitespace-nowrap rounded-full ${
                isActive ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            {STATUS}
          </Button>
        );
      },
    },
    {
      id: "5",
      head: "Duration",
      key: "DURATION",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "6",
      head: "Price",
      key: "PRICE",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "7",
      head: "Installment",
      key: "INSTALLMENT",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "8",
      head: "Sales Person",
      key: "SALEAPERSON",
      isSortable: true,
      isFixed: false,
      render: ({ SALEAPERSON, PROFILE_IMG }) => (
        <div className="flex items-center p-4 gap-3 min-w-0">
          <Avathar
            className="size-8 shrink-0"
            imgUrl={PROFILE_IMG || ""}
            loading={false}
          />
          <span className="line-clamp-2 truncate min-w-0">{SALEAPERSON}</span>
        </div>
      ),
    },
  ];

  const [courseData, setCourseData] = useState([
    {
      ID: 1,
      COURSENAME: "Product Photography Techniques",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/6e/cd/05/6ecd05e38861082a329199dc42d6d602.jpg",
      CATEGORY: "Photography",
      STATUS: "Active",
      DURATION: "52 Hrs",
      PRICE: "20,000",
      INSTALLMENT: "Available",
      SALEAPERSON: "Arshad",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/80/d8/16/80d816821f556834492b89597d21e117.jpg",
    },
    {
      ID: 2,
      COURSENAME: "Product Photography Techniques",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/6e/cd/05/6ecd05e38861082a329199dc42d6d602.jpg",
      CATEGORY: "Web Development",
      STATUS: "In-Active",
      DURATION: "52 Hrs",
      PRICE: "20,000",
      INSTALLMENT: "Not Available",
      SALEAPERSON: "Arshad",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/80/d8/16/80d816821f556834492b89597d21e117.jpg",
    },
    {
      ID: 3,
      COURSENAME: "Product Photography Techniques",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/6e/cd/05/6ecd05e38861082a329199dc42d6d602.jpg",
      CATEGORY: "Design",
      STATUS: "Active",
      DURATION: "52 Hrs",
      PRICE: "20,000",
      INSTALLMENT: "Not Available",
      SALEAPERSON: "Arshad",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/80/d8/16/80d816821f556834492b89597d21e117.jpg",
    },
    {
      ID: 3,
      COURSENAME: "Product Photography Techniques",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/6e/cd/05/6ecd05e38861082a329199dc42d6d602.jpg",
      CATEGORY: "Design",
      STATUS: "Active",
      DURATION: "52 Hrs",
      PRICE: "20,000",
      INSTALLMENT: "Not Available",
      SALEAPERSON: "Arshad",
      PROFILE_IMG: "https://i.pravatar.cc/100?img=33",
    },
  ]);
  const [fetchStatus, setFetchStatus] = useState("loading");
  const [searchValue, setSearchValue] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterFormData, setFilterFormData] = useState();
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  const totalCourses = courseData.length;

  const handleEdit = (data) => {
    console.log("Edit:", data);
  };

  const tableActionColumn = {
    id: "9",
    head: "Actions",
    align: "center",
    isFixed: true,
    isFixed: true,
    isLeftFixed: true,
    render: (item) => (
      <ActionsCell
        data={item}
        actions={{
          delete: (data) => createAction("delete", data),
          edit: handleEdit,
        }}
      />
    ),
  };

  return (
    <>
      <PageContainer className="p-3 pb-0 h-full flex flex-col space-y-2">
        <PageToolbarGroup
          actions={[
            <div key="toolbar" className="flex items-center gap-3 w-full">
              <div className="flex-grow">
                <PageSearchBar InputClassName="w-full max-w-[40rem]" />
              </div>{" "}
              <Button
                size="md"
                variant="secondary"
                className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-300"
                onClick={() => alert("Filter Clicked")}
              >
                <IconSort />
                Filter
              </Button>
              <Button
                size="md"
                variant="secondary"
                onClick={() => setIsCreateDrawerOpen(true)}
                className="flex items-center gap-2 bg-black text-white px-3 py-2 hover:bg-gray-800"
              >
                <IconPlus />
                Add New Course
              </Button>
            </div>,
          ]}
        />

        <div className="flex-1 container mx-auto border rounded-lg border-gray-200 ">
          <TableHeader
            title="Course List"
            count={`${totalCourses} Courses`}
            countVariant="yellow"
            Actions={
              <Button
                variant="tertiary"
                size="sm"
                onClick={() => alert("More options")}
              >
                <IconMoreVertical />
              </Button>
            }
          />
          <div className="overflow-y-auto panel-scrollbar  h-[calc(100vh-200px)]">
            <DataTableAlt
              columns={[...TABLE_COLUMNS, tableActionColumn]}
              data={courseData}
              isLoading={fetchStatus === "default"}
              pagination={{}}
              containerClassName=""
              className="h-full p-0 rounded-t-none"
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
};
