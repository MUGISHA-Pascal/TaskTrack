import React from "react";

const App: React.FC = () => {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Hello Tailwind CSS!</h1>
      <p className="text-gray-700">
        This is a paragraph styled with Tailwind CSS.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Tailwind Button
      </button>
    </div>
  );
};

export default App;
