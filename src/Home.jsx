/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-screen"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
    >
      <div className="w-11/12 md:w-5/6 lg:w-2/3 flex flex-col gap-4 bg-slate-900 text-slate-200 p-5 rounded-xl">
        <h3 className="font-bold text-2xl">Abdullah</h3>
        <p>
          <span className="font-semibold">SSC</span>{" "}
          <span className="text-sm text-slate-400">(February - 2020)</span>. I'm
          in my 6th semester studying computer department at Tangail Polytechnic
          Institute.
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

        <div className="flex gap-4">
          {/* download resume button  */}
          <button className="w-36 bg-slate-800 p-2 rounded-md cursor-pointer">
            <a
              className="font-semibold"
              href="https://drive.google.com/file/d/1LKUB0ld416icRLNOl4zAMnNH_xs9lsXj/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </button>

          {/* Link to BMI Calculation page  */}
          <button className="w-36 text-slate-800 bg-slate-50 p-2 rounded-md cursor-pointer">
            <Link className="font-semibold" to="/calculate-bmi">
              Calculate BMI
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
