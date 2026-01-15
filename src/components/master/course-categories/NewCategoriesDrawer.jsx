import React, { useRef, useState, useEffect } from "react";
import { Drawer } from "../../ui/Drawer";
import { DrawerHeader } from "../../ui/DrawerHeader";
import { SectionHeader } from "../../enquiry/NewEnquiryDrawer";
import { Button } from "../../ui/button/Button";
import { InputGroup } from "../../ui/InputGroup";
import { TextArea } from "../../ui/TextArea";
import { Select } from "../../enquiry/Select";
import ToggleButton from "../../ui/ToggleButton";

export const NewCategoriesDrawer = ({
  mode = "ADD",
  initialFormData = null,
  saveCallback = null,
  ...drawerProps
}) => {

  // --------------------------
  // INITIAL FORM STATE
  // --------------------------
  const [formData, setFormData] = useState({
    name: "",
    descp: "",
    status: "",
    image: "",
    isPriority: "N",
  });

  const { onClose } = drawerProps;

  // --------------------------
  // STATUS OPTIONS
  // --------------------------
  const statusOptions = [
    { label: "Active", value: "A" },
    { label: "Inactive", value: "I" },
  ];

  // --------------------------
  // ON INPUT CHANGE HANDLER
  // --------------------------
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --------------------------
  // SUBMIT HANDLER
  // --------------------------
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      alert("Category name is required");
      return;
    }

    saveCallback?.(formData);
    onClose();
  };

  return (
    <>
      <Drawer {...drawerProps} isOutsideClickable={false}>
        <Drawer.Header onClose={onClose}>
          <DrawerHeader title="New Category" />
        </Drawer.Header>

        <Drawer.Body className="p-0">
          <form
            onSubmit={handleFormSubmit}
            id="category-form"
            className="flex flex-col"
          >
            <SectionHeader head="Basic Details">
              <div className="p-4 space-y-4">

             
                <FileUploadSection
                  selectedImg={formData?.image || "https://i.pinimg.com/1200x/0d/30/c3/0d30c3a3a4b7c95f086030d166f260b7.jpg"}
                  onChange={(img) => {
                    setFormData((prev) => ({ ...prev, image: img }));
                  }}
                />

                <div className="flex flex-col gap-6">

                  <InputGroup
                    label="Category Name"
                    placeholder="Category Name"
                    id="name"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                  />

                  <InputGroup
                    label="Description"
                    id="descp"
                    name="descp"
                  >
                    <TextArea
                      name="descp"
                      id="descp"
                      className="h-[100px]"
                      placeholder="Enter Description"
                      value={formData?.descp}
                      onChange={handleInputChange}
                      maxLength={90}
                    />
                  </InputGroup>

                  <InputGroup
                    id="status"
                    name="status"
                    label="Status"
                    placeholder="Select Status"
                  >
                    <Select
                      options={statusOptions}
                      selectedOption={statusOptions.find(
                        (o) => o.value === formData?.status
                      )}
                      onChange={(opt) =>
                        setFormData((prev) => ({
                          ...prev,
                          status: opt.value,
                        }))
                      }
                    />
                  </InputGroup>

                  <InputGroup
                    label="Top Priority"
                    id="priority"
                    name="priority"
                    className="flex flex-row justify-between"
                  >
                    <ToggleButton
                      isOn={formData?.isPriority === "Y"}
                      handleToggle={() => {
                        setFormData((prev) => ({
                          ...prev,
                          isPriority:
                            prev.isPriority === "Y" ? "N" : "Y",
                        }));
                      }}
                    />
                  </InputGroup>
                </div>
              </div>
            </SectionHeader>

          </form>
        </Drawer.Body>

        <Drawer.Footer className="justify-end">
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
            form="category-form"
            size="md"
            variant="secondary"
            className="min-w-[120px] bg-[#333333] text-white"
          >
            Save
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
};



const FileUploadSection = ({ selectedImg = null, onChange }) => {
  const fileRef = useRef(null);
  const [isPending, setIsPending] = useState(false);

  const onFileClick = () => {
    fileRef?.current?.click();
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file, file.name);

    try {
      setIsPending(true);
      const response = await uploadFile(formData);

      if (response?.message) {
        onChange(response?.filePath);
      } else {
        alert("Couldn't upload the file");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsPending(false);
    }
  };

  const handleFileChange = ({ target: { files } }) => {
    if (!files[0]) return;

    if (files[0].type.startsWith("image")) {
      handleFileUpload(files[0]);
    } else {
      alert("Select a valid image");
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <input
        type="file"
        ref={fileRef}
        hidden
        onChange={handleFileChange}
      />

      <div className="size-14 rounded-full border overflow-clip">
        <img
          src={
            selectedImg ||
            "/images/profile-default.png"
          }
          alt="image"
          className="object-cover h-full w-full cursor-pointer"
          onClick={onFileClick}
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          disabled={isPending}
          size="sm"
          variant="secondary"
          className="bg-gray-950 text-white"
          onClick={onFileClick}
        >
          {selectedImg ? "Change" : "Upload"}
        </Button>

        {selectedImg && (
          <Button
            disabled={isPending}
            size="sm"
            variant="danger"
            onClick={() => onChange("")}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};
