import { motion } from "framer-motion";

import reactLogo from "../assets/logos/React.png";
import tailwindLogo from "../assets/logos/talwind.png";
import pythonLogo from "../assets/logos/python.png";
import tensorflowLogo from "../assets/logos/tensorflow_logo.png";
import pandasLogo from "../assets/logos/pandas.jpg";
import numpyLogo from "../assets/logos/numpy.png";
import sklearnLogo from "../assets/logos/sklearn.png";

const technologies = [
  {
    name: "React",
    image: reactLogo,
    color: "bg-sky-50",
  },
  {
    name: "Tailwind CSS",
    image: tailwindLogo,
    color: "bg-cyan-50",
  },
  {
    name: "Python",
    image: pythonLogo,
    color: "bg-yellow-50",
  },
  {
    name: "TensorFlow",
    image: tensorflowLogo,
    color: "bg-orange-50",
  },

  {
    name: "Pandas",
    image: pandasLogo,
    color: "bg-indigo-50",
  },
  {
    name: "NumPy",
    image: numpyLogo,
    color: "bg-blue-50",
  },
  {
    name: "Scikit Learn",
    image: sklearnLogo,
    color: "bg-purple-50",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-block bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full font-semibold">
            🚀 Tech Stack
          </span>

          <h2 className="text-5xl font-bold mt-6 text-slate-900">
            Teknologi yang Digunakan
          </h2>

          <p className="text-slate-500 mt-5 max-w-3xl mx-auto leading-8">
            Sistem analisis sentimen dibangun menggunakan teknologi modern mulai
            dari frontend, backend, machine learning hingga deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`${tech.color} w-24 h-24 rounded-3xl flex items-center justify-center`}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-24 h-24 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 font-bold text-lg text-slate-800">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
