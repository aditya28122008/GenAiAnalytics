import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQuery, randomizeData, setLoading } from "../store/query/slice";

const mockSuggestions = [
  "How to increase sales in Q2?",
  "Best marketing strategies for startups?",
  "How to reduce operational costs?",
  "What are the latest business trends?",
  "How to improve customer retention?"
];

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    
    setLoadingSuggestions(true);
    setTimeout(() => {
      const filtered = mockSuggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setLoadingSuggestions(false);
    }, 500); // Simulating API fetch delay
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(addQuery(query));
      dispatch(randomizeData());
      dispatch(setLoading(false));
    }, 800);
    setQuery("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded mb-2 dark:bg-gray-800 dark:text-white"
        placeholder="Ask a business question..."
      />
      {loadingSuggestions && <div className="text-gray-500 text-sm">Loading suggestions...</div>}
      {suggestions.length > 0 && (
        <ul className="absolute bg-white dark:text-white dark:bg-gray-900 border rounded shadow-md w-full mt-10">
          {suggestions.map((sug, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => handleSuggestionClick(sug)}
            >
              {sug}
            </li>
          ))}
        </ul>
      )}
      <button type="submit" className="bg-purple-500 cursor-pointer hover:bg-purple-400 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default QueryInput;
