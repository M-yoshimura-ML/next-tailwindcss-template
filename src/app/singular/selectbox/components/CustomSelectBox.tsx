"use client";
import React from 'react';
import { BsChevronExpand } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const sities = ["Moscow", "New York", "London", "Paris", "Tokyo", "Berlin", "Madrid", "Rome", "Beijing", "Sydney"];

const CustomSelectBox = () => {
    const [selectedCity, setSelectedCity] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
        <div className='bg-gray-100 flex flex-col justify-center items-center w-64 relative z-30'>
            <div 
                className='flex flex-row justify-between items-center bg-white w-48 h-10 my-2 px-2'
                onClick={() => setIsOpen(!isOpen)}
                onBlur={() => setIsOpen(false)}
            >
                <span>{selectedCity}</span>
                <BsChevronExpand onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-gray-400" />
            </div>
                
            <div className={`flex flex-col bg-white border w-48 border-gray-300 rounded-lg ${
                isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"} transition-all duration-300 overflow-hidden absolute top-16 left-0"
            `}>
                <ul className="max-h-48 overflow-y-auto">
                    {sities.map((city, index) => (
                        <li 
                            key={index} 
                            onClick={() => {
                                setSelectedCity(city);;
                                setIsOpen(false)
                            }}
                            className={`flex justify-start items-center gap-x-2 p-2 hover:bg-orange-200 cursor-pointer
                                ${selectedCity === city ? "bg-orange-200" : ""}`}
                        >
                            <AiOutlineCheck className={`text-orange-300 ${selectedCity == city ? "opacity-100" : "opacity-0"}`} />
                            {city}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-0 ${isOpen ? "block" : "hidden"}`}
            onClick={() => setIsOpen(false)} 
        ></div>
        </>
    )
}

export default CustomSelectBox;

