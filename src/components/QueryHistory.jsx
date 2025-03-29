import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const queries = useSelector((state) => state.query.queries);

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2 dark:text-gray-100">Query History</h2>
      <ul className="list-disc pl-5">
        {queries.map((q, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-400">{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;