import "./App.css";
import React from "react";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import QueryResults from "./components/QueryResults";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const App = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={`${darkTheme ? "dark" : "light"}`}>
      <Navbar />
      <main
        className={`min-h-screen pt-56 sm:pt-52 md:pt-28 lg:pt-32 dark:bg-gray-900 bg-gray-100 flex flex-col items-center p-6`}
      >
        <h1 className="text-xl lg:mb-8 dark:text-white sm:text-2xl md:text-4xl xl:text-6xl text-center font-bold mb-6">
          Analytics Dashboard
        </h1>
        <div className="w-full max-w-3xl dark:bg-gray-800 bg-white p-6 rounded-lg shadow-md">
          <QueryInput />
          <QueryHistory />
          <QueryResults />
        </div>
      </main>
    </div>
  );
};

export default App;
