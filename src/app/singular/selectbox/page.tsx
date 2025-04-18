import React from 'react';
import CustomSelectBox from './components/CustomSelectBox';

const SelectBoxPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Select Box</h1>
        <CustomSelectBox />
    </div>
  )
}

export default SelectBoxPage