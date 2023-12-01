import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const init = {
  weight: 0,
  height: 0,
};
function BMICalculator() {
  const [formData, setFormData] = useState({ ...init });
  const [BMI, setBMI] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseFloat(formData.weight) < 1 || parseFloat(formData.weight) > 300) {
      alert("Weight must be between 0 and 300");
      return;
    }
    if (
      parseFloat(formData.height) < 0.1 ||
      parseFloat(formData.height) > 3.0
    ) {
      alert("Height must be between 0.1 and 3.0");
      return;
    }

    const calculatedBMI = (
      parseFloat(formData.weight) /
      (parseFloat(formData.height) * parseFloat(formData.height))
    ).toFixed(1);
    setBMI(calculatedBMI);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
      <motion.div
        className="w-11/12 md:w-5/6 lg:w-1/2 flex flex-col gap-4 bg-slate-900 text-slate-200 p-5 rounded-xl"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
      >
        <h4 className="text-center text-2xl">Calculate BMI</h4>

        {/* take height and weight from user  */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={(e) => handleChange(e)}
            className="p-2 rounded-md outline-none text-slate-800"
            placeholder="Enter weight in KG"
          />
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={(e) => handleChange(e)}
            className="p-2 rounded-md outline-none text-slate-800"
            placeholder="Enter height in Meter"
          />
          <button className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700">
            Calculate
          </button>
        </form>
      </motion.div>

      {BMI > 0 && (
        <motion.div
          className="w-11/12 md:w-5/6 lg:w-1/2 flex flex-col gap-4 bg-slate-900 text-slate-200 p-5 rounded-xl"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, duration: 0.2 }}
        >
          BMI : {BMI}
        </motion.div>
      )}

      <Link
        to="/"
        className="uppercase bg-slate-900 p-2 text-slate-100 rounded-md cursor-pointer hover:bg-slate-800"
      >
        Back to home page
      </Link>
    </div>
  );
}

export default BMICalculator;
