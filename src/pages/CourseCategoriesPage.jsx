import React, { useEffect, useState } from "react";
import { PageContainer } from "../components/ui/PageContainer";
import { PageToolbarGroup } from "../components/page-toolbar/PageToolbarGroup";
import { Button } from "../components/ui/button/Button";
import { PageSearchBar } from "../components/ui/PageSearchBar";
import {
  IconAudioMessage,
  IconDocumentCircle,
  IconPlus,
  IconSort,
} from "../assets/icons/interfaceIcons2";
import { List } from "../components/ui/List";
import { CourseCard } from "../components/master/course-categories/CourseCard";
import { IconDevelopment } from "../assets/icons/InterfaceIcons";
import Card from "../components/ui/Card";
import { EmptyMessage } from "../components/ui/EmptyMessage";
import { NewCategoriesDrawer } from "../components/master/course-categories/NewCategoriesDrawer";

export const CourseCategoriesPage = () => {
  // States
  const [courseListData, setCourseListData] = useState([
    {
      id: 1,
      head: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, Tailwind & More",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 2,
      head: "Mobile Development",
      desc: "Learn React Native, Flutter, iOS & Android Development",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 3,
      head: "Data Science",
      desc: "Learn Python, Machine Learning, Data Analysis & Visualization",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 4,
      head: "UI/UX Design",
      desc: "Learn Figma, User Research, Prototyping & Design Systems",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 5,
      head: "DevOps",
      desc: "Learn Docker, Kubernetes, AWS & CI/CD Pipelines",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 6,
      head: "Cyber Security",
      desc: "Learn Ethical Hacking, Network Security & Cryptography",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 7,
      head: "Digital Marketing",
      desc: "Learn SEO, Social Media Marketing, Analytics & Strategy",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
    {
      id: 8,
      head: "Business & Finance",
      desc: "Learn Entrepreneurship, Investment, Accounting & Management",
      img: "https://i.pinimg.com/1200x/75/65/67/756567d04ec12dac8b72f1582a8ade77.jpg",
      icon: <IconDevelopment size="20" />,
    },
  ]);

  const [fetchStatus, setFetchStatus] = useState("loading");
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFetchStatus("loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContainer>
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
              Add New Category
            </Button>
          </div>,
        ]}
      />

      <div className="overflow-auto no-scrollbar bg-gray-50">
        <div className="container mx-auto">
          {fetchStatus === "loading" ? (
            <List
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              data={Array.from({ length: 8 })}
              render={() => (
                <Card>
                  <div className="flex flex-col gap-4 animate-pulse">
                    <div className="h-40 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-xl" />

                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
                        <div className="w-5 h-5 bg-gray-400 rounded-full" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="h-5 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded w-4/5" />
                        <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded w-3/4" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="h-10 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-xl" />
                      <div className="h-10 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-xl" />
                    </div>
                  </div>
                </Card>
              )}
            />
          ) : courseListData?.length > 0 ? (
            <List
              data={courseListData}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              render={(item) => (
                <CourseCard
                  key={item.id}
                  img={item.img}
                  head={item.head}
                  descp={item.desc}
                  Icon={item.icon}
                />
              )}
            />
          ) : (
            <EmptyMessage message="No Categories Found" />
          )}
        </div>
      </div>

      {isCreateDrawerOpen && (
        <NewCategoriesDrawer
          isOpen={isCreateDrawerOpen}
          onClose={() => setIsCreateDrawerOpen(false)}
          saveCallback={(data) => {
            console.log("Saved:", data);
            setIsCreateDrawerOpen(false);
          }}
        />
      )}
    </PageContainer>
  );
};
