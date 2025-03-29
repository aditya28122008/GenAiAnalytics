import React from "react";
import { useSelector } from "react-redux";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const QueryResults = () => {
  const { queries, loading } = useSelector((state) => state.query);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const mockData = useSelector((state) => state.query.mockData);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
        Query Results
      </h2>
      {loading ? (
        <p className="text-purple-500 text-center">
          <Quantum
            size="45"
            speed="1.75"
            color={`${darkTheme ? "white" : "black"}`}
          />
        </p>
      ) : queries.length > 0 ? (
        <div className="p-4 bg-gray-200 rounded">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ad46ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-500">No queries submitted yet.</p>
      )}
    </div>
  );
};

export default QueryResults;
