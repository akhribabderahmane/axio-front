import React from "react";
import { menuItems01, menuItems02 } from "../../constants/menuItems";
import MenuButton from "./MenuButton";
import { IoLogOut } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className=" w-[340px] min-h-screen bg-axio-white border-r-[2px] border-gray-200 py-6 px-5 flex flex-col gap-8 ">
      {/* logo */}
      <div>
        <img src="/public/logo.svg" alt="logo" />
      </div>
      {/* first menu list */}
      <div className=" flex flex-col gap-2 ">
        <h2 className=" text-axio-dark-blue  pl-2 font-medium">Principal</h2>
        <div className=" flex flex-col gap-3">
          {menuItems01.map((item) => (
            <MenuButton key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* second menu list */}
      <div className=" flex flex-col gap-2 ">
        <h2 className=" text-axio-dark-blue  pl-2 font-medium">Paramètres</h2>
        <div className=" flex flex-col gap-3">
          {menuItems02.map((item) => (
            <MenuButton key={item.id} item={item} />
          ))}
        </div>
      </div>
      {/* abbonemenet */}
      <div className=" flex flex-col gap-2 ">
        <h2 className=" text-axio-dark-blue  pl-2 font-medium">abbonemenet</h2>
        <button className=" p-4 py-5 bg-axio-blue flex flex-row items-center gap-3 rounded-xl ">
          <img src="/public/menu/jew.svg" alt="" />
          <div className="flex flex-col text-left gap-1">
            <h3 className=" text-lg text-axio-white">
              Passer au plan supérieur{" "}
            </h3>
            <p className=" text-sm text-axio-white">
              Tirez le meilleur parti d’Axio avec le niveau d’accès le plus
              élevé
            </p>
          </div>
        </button>
      </div>
      <button className="  justify-center p-2 py-3 bg-axio-blue flex flex-row items-center gap-3 rounded-xl ">
        <IoLogOut className=" text-axio-white text-2xl " />
        <p className=" text-axio-white font-bold text-lg ">Se déconnecter</p>
      </button>
    </div>
  );
};

export default SideBar;
