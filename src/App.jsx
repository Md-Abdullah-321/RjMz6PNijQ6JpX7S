function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-11/12 md:w-5/6 lg:w-1/2 mx-auto flex flex-col gap-4 bg-slate-900 text-slate-200 p-5 rounded-xl">
        <h3 className="font-bold text-2xl">Abdullah</h3>
        <p>
          <span className="font-semibold">SSC</span>{" "}
          <span className="text-sm text-slate-400">(February - 2020)</span>.
          Currently, Studying in Tangail Polytechnic Institute.
        </p>
        <div className="flex flex-col gap-3">
          {/* frontEnd  */}
          <ul className="flex gap-5">
            <h4 className="font-semibold">FrontEnd:</h4>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">React.js</li>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">Next.js</li>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">Bootstrap</li>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">
              Tailwind CSS
            </li>
          </ul>

          {/* backend  */}
          <ul className="flex gap-5">
            <h4 className="font-semibold mr-1">Backend: </h4>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">
              Express.js
            </li>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">Node.js</li>
          </ul>

          <ul className="flex gap-5">
            <h4 className="font-semibold">Database:</h4>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">MongoDB</li>
            <li className="bg-slate-800 p-1 rounded-lg shadow-md">SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
