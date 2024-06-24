import React from 'react';

const TotalDefective = ({ defectiveCount }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-[#ff9c54] rounded shadow">
            <div className="text-2xl font-bold text-[#fff]">{defectiveCount}</div>
            <div className="text-[#fff]">Total Defective</div>
        </div>
    );
};

export default TotalDefective;
