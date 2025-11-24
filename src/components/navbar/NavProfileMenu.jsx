// import React from "react";
// import { Drawer } from "../ui/Drawer";
// import { Button } from "../ui/button/Button";
// import { IconCross } from "../../assets/icons/InterfaceIcons";
// import { Avathar } from "../Avathar";
// import { Card } from "../Card";

// export const NavProfileMenu = ({
//   onClose = () => {},
//   onLogout = () => {},
//   isOpen = false,
// }) => {
//   return (
//     <>
//       <Drawer
//         onClose={onClose}
//         isOpen={isOpen}
//         isEscEnabled={true}
//         isOutsideClickable={true}
//         drawerClassName="rounded-l-none w-full md:w-[350px] lg:w-[350px] xl:w-[350px]"
//       >
//         <Drawer.Header className="flex items-center justify-between rounded-tl-none border-gray-100">
//           <div className="flex gap-3 items-start flex-grow ">
//             {/* avatar */}
//             <div className="">
//               <Avathar
//                 className="size-10"
//                 loading={false}
//                 imgUrl="/images/me.png"
                
//               />
//               {/* online */}
//               <span></span>
//             </div>

//             {/* User Details */}
//             <div className=" space-y-0.2">
//               <p className="text-md font-semibold text-[#2B1700]">salmaan</p>
//               <p className="text-xs text-gray-500">Android Developer</p>
//             </div>
//           </div>
//           {/* close */}
//           <div className=" flex items-center justify-end">
//             <Button
//               variant="tertiary"
//               size="md"
//               onClick={onclose}
//               className="flex items-center "
//             >
//               <IconCross />
//             </Button>
//           </div>
//         </Drawer.Header>

//         <Drawer.Body innerClass="grid grid-cols-1 gap-6">
//           <Card>
//              <div>

//              </div>


//           </Card>


//         </Drawer.Body>
//       </Drawer>
//     </>
//   );
// };
