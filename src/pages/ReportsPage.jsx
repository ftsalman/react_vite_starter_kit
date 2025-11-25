import React, { useState } from "react";
import { PageToolbarGroup } from "../components/page-toolbar/PageToolbarGroup";
import { PageContainer } from "../components/ui/PageContainer";
import { PageSearchBar } from "../components/ui/PageSearchBar";
import { Button } from "../components/ui/button/Button";
import {
  IconMoreVertical,
  IconPlus,
  IconSort,
} from "../assets/icons/interfaceIcons2";
import { TableHeader } from "../components/data-tabel/TableHeader";
import DataTableAlt from "../components/data-tabel/DataTableAlt";
import { ActionsCell } from "../components/data-tabel/DataTableCell";
import Avathar from "../components/ui/Avathar";

export const ReportsPage = () => {
  const [reportsData] = useState([
    {
      ID: 1,
      studentName: "Arshad",
      contact: "9839791811",
      avatar: "https://in.pinterest.com/pin/21392166972085972/",
      courseName: "Product Photography Techniques",
      subTitle: "12 Chapters",
      courseImage:
        "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg",
      status: "Approved",
      amount: "₹ 20,000",
    },
    {
      ID: 2,
      studentName: "Arshad",
      contact: "9839791811",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      courseName: "Product Photography",
      subTitle: "",
      courseImage:
        "https://images.pexels.com/photos/275979/pexels-photo-275979.jpeg",
      status: "Pending",
      amount: "₹ 20,000",
    },
    {
      ID: 3,
      studentName: "Arshad",
      contact: "9839791811",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      courseName: "Product Photography Techniques",
      subTitle: "",
      courseImage:
        "https://images.pexels.com/photos/185035/pexels-photo-185035.jpeg",
      status: "Approved",
      amount: "₹ 20,000",
    },
    {
      ID: 4,
      studentName: "Arshad",
      contact: "9839791811",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      courseName: "Product Photography",
      subTitle: "",
      courseImage:
        "https://images.pexels.com/photos/274095/pexels-photo-274095.jpeg",
      status: "Pending",
      amount: "₹ 20,000",
    },
  ]);

  const totalReports = reportsData.length;

  const handleEdit = (data) => {
    console.log("Edit:", data);
  };


  const TABLE_COLUMNS = [
    {
      id: "1",
      head: "#",
      key: "ID",
      isSortable: true,
    },
    {
      id: "2",
      head: "Student Name",
      key: "studentName",
      align: "left",
      render: (item) => (
        <div className="flex items-center p-4 gap-3 min-w-0">
          <Avathar className="size-9 shrink-0"
          imgUrl={item.avatar}
          loading={false}

           />
          <span className="line-clamp-2 truncate">{item.studentName}</span>
        </div>
      ),
    },
    {
      id: "3",
      head: "Contact",
      key: "contact",
      align: "center",
    },
    {
      id: "4",
      head: "Course Name",
      key: "courseName",
      render: (item) => (
        <div className="flex items-center p-4 gap-2 min-w-0">
          <Avathar className="size-8 shrink-0" 
          imgUrl={item.courseImage}             
          loading={false}
          />
          <span className="line-clamp-2 text-sm truncate">
            {item.courseName}
          </span>
        </div>
      ),
    },

    {
      id: "5",
      head: "Status",
      key: "status",
      align: "center",
      width: "120px",
      render: (item) => {
        const approved = item.status === "Approved";

        return (
          <div className="flex justify-center">
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
              ${
                approved
                // ? "bg-green-100 text-green-700"
                // : "bg-yellow-100 text-yellow-700"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full
                ${approved ? "bg-green-500" : "bg-yellow-500"}
              `}
              ></span>
              {item.status}
            </div>
          </div>
        );
      },
    },

    {
      id: "6",
      head: "Amount",
      key: "amount",
      align: "center",
    },
  ];


  const actionColumn = {
    id: "7",
    head: "Actions",
    align: "center",
    isFixed: true,
    render: (item) => (
      <ActionsCell
        data={item}
        actions={{
          delete: (data) => console.log("Delete:", data),
          edit: handleEdit,
        }}
      />
    ),
  };

  return (
    <PageContainer className="p-3 pb-0 h-full flex flex-col">
      <PageToolbarGroup
        actions={[
          <div key="toolbar" className="flex items-center gap-3 w-full">
            <div className="flex-grow">
              <PageSearchBar InputClassName="w-full max-w-[40rem]" />
            </div>

            <Button
              size="md"
              variant="secondary"
              className="bg-white border border-gray-300 flex items-center gap-2"
              onClick={() => alert("Filter Clicked")}
            >
              <IconSort />
              Filter
            </Button>

            <Button
              size="md"
              variant="secondary"
              className="bg-black text-white hover:bg-gray-800 flex items-center gap-2"
              onClick={() => alert("Add New")}
            >
              <IconPlus />
              Add New Reports
            </Button>
          </div>,
        ]}
      />

      <div className="flex-1 container mx-auto border rounded-lg border-gray-200">
        <TableHeader
          title="Reports"
          count={`${totalReports} reports`}
          countVariant="yellow"
          Actions={
            <Button variant="tertiary" size="sm">
              <IconMoreVertical />
            </Button>
          }
        />

        <div className="overflow-y-auto panel-scrollbar h-[calc(100vh-200px)]">
          <DataTableAlt
            columns={[...TABLE_COLUMNS, actionColumn]}
            data={reportsData}
            isLoading={false}
            pagination={{}}
            className="h-full p-0"
          />
        </div>
      </div>
    </PageContainer>
  );
};
