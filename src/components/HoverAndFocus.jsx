import React from "react";

const HoverAndFocus = () => {
  return (
    <div>
      <h1>Hover and Focus</h1>
      <div>
        <button className="w-40 bg-sky-400 text-slate-800 rounded-full py-2 mx-2 hover:bg-red-600">
          Save
        </button>
        <button className="w-40 bg-sky-400 text-slate-800 rounded-full py-2 mx-2 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-700 shadow-slate-400">
          Save
        </button>
        <button className="w-40 bg-sky-400 text-white rounded-full py-2 mx-2 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-200 shadow-slate-400">
          Save
        </button>
      </div>
      <div className="mt-3">
        <input type="email"
        className="border border-green-600 text-gray-500 text-sm rounded-lg block w-1/2 p-2.5 focus:outline-gray-600 peer" />
        <p className="mt-2 text-red-500 invisible peer-invalid:visible">Lütfen geçerli bir email giriniz</p>
      </div>
    </div>
  );
};

export default HoverAndFocus;
