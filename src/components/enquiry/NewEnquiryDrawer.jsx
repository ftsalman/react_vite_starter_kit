import React, { useState } from "react";
import { Drawer } from "../ui/Drawer";
import { DrawerHeader } from "../ui/DrawerHeader";
import { InputGroup } from "../ui/InputGroup";
import { Button } from "../ui/button/Button";
import { IconDropDown } from "../../assets/icons/interfaceIcons2";
import { useToggle } from "../../hooks/useToggle";
import { Select } from "./Select";
import { TextArea } from "../ui/TextArea";
import ToggleButton from "../ui/ToggleButton";

export const NewEnquiryDrawer = ({
  mode = "ADD",
  initialFormData = null,
  saveCallback = null,
  ...drawerProps
}) => {
  const [formData, setFormData] = useState();
  const [course, setCourse] = useState(null);

  const handleFormSubmit = (e) => {};

  // fun

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { onClose } = drawerProps;

  const courses = [
    {
      label: "Python Programming for Robotics",
      image:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
    },
    {
      label: "Data Structures and Data Science",
      image:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
    },
    {
      label: "Python Programming for Robotics",
      image:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
    },
    {
      label: "Data Structures and Data Science",
      image:
        "https://i.pinimg.com/736x/a2/c2/ad/a2c2adf0ce6b41baf4f758103d4458cc.jpg",
    },
  ];
  return (
    <>
      <Drawer {...drawerProps} isOutsideClickable={false}>
        <Drawer.Header onClose={onClose}>
          <DrawerHeader title="New Enquiry" />
        </Drawer.Header>
        <Drawer.Body className="p-0">
          <form
            onSubmit={handleFormSubmit}
            id="enquiry-form"
            className="flex flex-col"
          >
            <SectionHeader head="Student Details">
              <div className=" flex flex-col p-4 space-y-4">
                <InputGroup
                  label="Student Name"
                  name="name"
                  id="name"
                  // value={formData.name}
                  value={formData?.name}
                  onChange={handleInputChange}
                />

                <InputGroup
                  label="Mobile Number"
                  name="number"
                  type="number"
                  id="number"
                  // value={formData.name}
                  value={formData?.mobile}
                  onChange={handleInputChange}
                />

                <InputGroup id="course" name="course" label="Course">
                  <Select
                    options={courses}
                    selectedOption={course}
                    onChange={(value) => setCourse(value)}
                  />
                </InputGroup>

                <InputGroup
                  label="Description"
                  id="descp"
                  name="descp"
                  // errorMessage={errorData?.descp}
                >
                  <TextArea
                    name="descp"
                    id="descp"
                    className="h-[100px]"
                    placeholder="Enter Description"
                    value={formData?.descp}
                    onChange={handleInputChange}
                    // hasError={errorData?.descp}
                    maxLength={70}
                  />
                </InputGroup>

                <InputGroup
                  label="Installment"
                  id="installment"
                  name="installment"
                  className="flex flex-row justify-between"
                >
                  <ToggleButton
                    isOn={formData?.isFavorite == "Y"}
                    handleToggle={() => {
                      setFormData((prev) => ({
                        ...prev,
                        isFavorite: formData?.isFavorite == "Y" ? "N" : "Y",
                      }));
                    }}
                  />
                </InputGroup>
              </div>
            </SectionHeader>
          </form>
        </Drawer.Body>

        <Drawer.Footer className=" justify-end">

        <Button
          onClick={onClose}
          variant="secondary"
          size="md"
          className="shadow-none text-gray-500"
        >
          Discard
        </Button>
        <Button
          type="submit"
          form=""
          size="md"
          variant="secondary"
          className="min-w-[120px] bg-[#333333] text-white "
        >
          Save
        </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};

const SectionHeader = ({ head = "", children = null }) => {
  const [isOpen, toggleOpen] = useToggle(true);

  return (
    <div className="flex flex-col">
      <div
        onClick={() => toggleOpen()}
        className={`px-4 py-3 sticky top-0 z-50 flex items-center gap-4 border-b ${
          isOpen ? "bg-white" : "bg-white"
        } border-gray-100`}
      >
        <h3 className="flex-grow text-sm font-semibold text-gray-800">
          {head}
        </h3>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            toggleOpen();
          }}
          className={`p-1 size-8 flex-shrink-0`}
          variant="tertiary"
        >
          <span
            className={` ${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          >
            <IconDropDown size="18" />
          </span>
        </Button>
      </div>
      {isOpen && <div className="duration-300 transition-all">{children}</div>}
    </div>
  );
};
