"use client";

import Link from "next/link";
import React from "react";

const TableExample: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-md mx-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Column 1</th>
              <th className="py-2 px-4">Column 2</th>
              <th className="py-2 px-4">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-4">Data 1</td>
              <td className="py-2 px-4">Data 2</td>
              <td className="py-2 px-4">
                <img
                  src="path/to/your/image.jpg"
                  alt="Image"
                  className="max-w-full h-auto"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableExample;
