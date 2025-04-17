"use client";

import React, { useContext} from "react";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";
import MainHeader from "./MainHeader";

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";


const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const { isMenuOpen, toggleMenu } = useContext(MenuContext);
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 w-full">
            <MainHeader />
            <div className="flex justify-start items-start">
                <aside className={`bg-white rounded-lg w-60 p-4 ${isMenuOpen ? "block" : "hidden"} transition duration-200 ease-in-out md:w-60 md:p-4`}>
                    <ul>
                        <li className="flex justify-start items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200 ease-in-out">
                            <AiOutlineHome className="mr-2" />
                            <Link href="/" className="">Home</Link>
                        </li>
                        <li className="flex justify-start items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200 ease-in-out">
                            <GrProjects className="mr-2" />
                            <h3 className="flex-1">Projects</h3>
                            <FaAngleRight className="ml-auto" />
                        </li>
                        <li className="flex justify-start items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200 ease-in-out">
                            <FaCheck className="mr-2" />
                            <h3 className="flex-1">Singule</h3>
                            <FaAngleRight className="ml-auto" />
                        </li>
                        <li className="flex justify-start items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200 ease-in-out">
                            <FaCheckDouble className="mr-2" />
                            <h3 className="flex-1">Complex</h3>
                            <FaAngleRight className="ml-auto" />
                        </li>
                        <li className="flex justify-start items-center p-2 hover:bg-blue-200 rounded-lg transition duration-200 ease-in-out">
                            <IoIosHelpCircleOutline className="mr-2" />
                            <Link href="/help" className="">Help</Link>
                        </li>
                    </ul>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
            
            <footer className="bg-gray-800 text-white p-4 text-center">
                © 2023 My Application
            </footer>
        </div>
    );
}

export default MainLayout;
