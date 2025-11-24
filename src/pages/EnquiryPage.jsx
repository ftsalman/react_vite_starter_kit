import React, { useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { PageToolbarGroup } from "../components/page-toolbar/PageToolbarGroup";
import { Button } from "../components/ui/button/Button";
import {
  IconMoreVertical,
  IconPlus,
  IconSort,
} from "../assets/icons/interfaceIcons2";
import DataTableAlt from "../components/data-tabel/DataTableAlt";
import { PageSearchBar } from "../components/ui/PageSearchBar";
import { EnquiryStatesList } from "../components/enquiry/EnquiryStatesList";
import Avathar from "../components/ui/Avathar";
import { TableHeader } from "../components/data-tabel/TableHeader";
import { ActionsCell } from "../components/data-tabel/DataTableCell";
import { NewEnquiryDrawer } from "../components/enquiry/NewEnquiryDrawer";

export const EnquiryPage = () => {
  const TABLE_COLUMNS = [
    {
      id: "1",
      head: "ID",
      key: "ID",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "2",
      head: "Student Name",
      key: "STUDENTNAME",
      isSortable: true,
      isFixed: false,
      render: ({ STUDENTNAME, PROFILE_IMG }) => (
        <div className="flex items-center p-4 gap-3 min-w-0">
          <Avathar
            className="size-9 shrink-0"
            imgUrl={PROFILE_IMG || ""}
            loading={false}
          />
          <span className="line-clamp-2 truncate min-w-0">{STUDENTNAME}</span>
        </div>
      ),
    },
    {
      id: "3",
      head: "Contact",
      key: "MOBILE",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "4",
      head: "Course Name",
      key: "COURSENAME",
      isSortable: true,
      isFixed: false,
      render: ({ COURSENAME, COUSRSE_IMG }) => (
        <div className=" flex  items-center p-4 gap-3 min-w-0">
          <Avathar
            className="size-9 shrink-0"
            imgUrl={COUSRSE_IMG}
            loading={false}
          />
          <span className="line-clamp-2 truncate min-w-0">{COURSENAME}</span>
        </div>
      ),
    },
    {
      id: "5",
      head: "Status",
      key: "STATUS",
      isSortable: true,
      isFixed: false,
      render: ({ STATUS }) => {
        const status = STATUS?.toLowerCase();

        const dotColor =
          status === "approved"
            ? "bg-green-500"
            : status === "pending"
            ? "bg-yellow-500"
            : "bg-red-500";

        return (
          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-2 px-2 py-0.5 h-6 rounded-lg"
          >
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <span className="capitalize">{STATUS}</span>
          </Button>
        );
      },
    },
    {
      id: "6",
      head: "Amount",
      key: "AMOUNT",
      isSortable: true,
      isFixed: false,
      render: ({ AMOUNT }) => (
        <span className="line-clamp-2 truncate min-w-0">₹{AMOUNT}</span>
      ),
    },
  ];

  const [enquiryData, setEnquiryData] = useState([
    {
      ID: "1",
      STUDENTNAME: "Abhishek",
      MOBILE: "9839791811",
      COURSENAME: "Webdevelopement",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/56/67/93/5667936906181a6fbe0501b471e2b5bd.jpg",
      STATUS: "pending",
      AMOUNT: "40000",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/dd/99/e6/dd99e6233b2fdd33893297094b895a3c.jpg",
    },
    {
      ID: "2",
      STUDENTNAME: "Shuhaib",
      MOBILE: "9839791811",
      COURSENAME: "MERN STACk",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/7e/ea/54/7eea54df0dd614c399c2288ffc5bcbd4.jpg",
      STATUS: "Approved",
      AMOUNT: "10000",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/6f/2e/13/6f2e13efa2bbdaf318967ece2314ee6f.jpg",
    },
    {
      ID: "3",
      STUDENTNAME: "Shuhaib",
      MOBILE: "9839791811",
      COURSENAME: "Digital Marketing",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
      STATUS: "Approved",
      AMOUNT: "20000",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/c2/93/07/c2930742a22de3cb367cc95e9f902416.jpg",
    },
    {
      ID: "3",
      STUDENTNAME: "Shuhaib",
      MOBILE: "9839791811",
      COURSENAME: "Digital Marketing",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
      STATUS: "Approved",
      AMOUNT: "20000",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/38/54/a8/3854a8e825bc816e7d7c2caa2c255460.jpg",
    },
    {
      ID: "3",
      STUDENTNAME: "Shuhaib",
      MOBILE: "9839791811",
      COURSENAME: "Digital Marketing",
      COUSRSE_IMG:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
      STATUS: "Approved",
      AMOUNT: "20000",
      PROFILE_IMG:
        "https://i.pinimg.com/736x/c2/93/07/c2930742a22de3cb367cc95e9f902416.jpg",
    },
  ]);

  const [fetchStatus, setFetchStatus] = useState("loading");
  const [searchValue, setSearchValue] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterFormData, setFilterFormData] = useState();
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  const handleEdit = (data) => {
    console.log("Edit:", data);
  };

  const createAction = (type, data) => {
    console.log(`${type} action:`, data);
  };

  const totalEnquiries = enquiryData.length;

  const tableActionColumn = {
    id: "7",
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
          admit: (data) => createAction("admit", data),
        }}
      />
    ),
  };

  return (
    <>
      <PageContainer className="p-3 pb-0 h-full flex flex-col">
        <div className="px-4 space-y-2.5">
          <EnquiryStatesList data={""} isLoading={true} />
        </div>

        <PageToolbarGroup
          actions={[
            <div key="toolbar" className="flex items-center gap-3 w-full">
              <div className="flex-grow">
                <PageSearchBar InputClassName="w-full max-w-[40rem]" />
              </div>

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
                Add New Enquiry
              </Button>
            </div>,
          ]}
        />

        <div className="flex-1 container mx-auto border rounded-lg border-gray-200 ">
          <TableHeader
            title="Enquiry List"
            count={`${totalEnquiries} Enquiries`}
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
          <div className="overflow-y-auto no-scrollbar h-[calc(100vh-300px)]">
            <DataTableAlt
              columns={[...TABLE_COLUMNS, tableActionColumn]}
              data={enquiryData}
              isLoading={false}
              containerClassName=" p-0 px-2
            "
              className="h-full p-0  rounded-t-none"
            />
          </div>
        </div>
      </PageContainer>

      {isCreateDrawerOpen && <NewEnquiryDrawer />}
    </>
  );
};
