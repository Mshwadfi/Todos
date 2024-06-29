import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <svg className="animate-spin h-5 w-5 mr-1 text-gray-300" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>
  );
};

export default Spinner;
