import React from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import Canvas from './Canvas';
const Whiteboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col p-1 bg-gray-800">
      {/* Header */}
      <div className="p-3  flex justify-between items-center bg-gray-800 ">
        <div className="flex gap-2 items-center">
          <h2 className="text-lg font-semibold text-white">Project</h2>
        </div>
        <Link to="/share" className="h-8 text-[12px] gap-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded flex items-center">
          Share
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow flex-col lg:flex-row mt-3  w-full h-full bg-gray-700">
        {/* Document Section */}
        <div className="flex-grow lg:w-1/2 h-full bg-gray-500  p-4">
         
          <Editor />
        </div>

        {/* Canvas Section */}
        <div className="flex-grow lg:w-1/2 h-full bg-gray-200  p-4">
         <Canvas/>
         
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;


