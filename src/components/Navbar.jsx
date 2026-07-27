import { useEffect, useState } from "react";
import { Menu, X, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technology", href: "#technology" },
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll ? "bg-white/80 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <BrainCircuit className="text-emerald-600" size={34} />

          <h1 className="text-2xl font-bold text-slate-900">
            Sentiment
            <span className="text-emerald-600">AI</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                className="text-slate-700 hover:text-emerald-600 transition duration-300 font-medium"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <a
          href="#demo"
          className="hidden lg:block bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          Mulai Analisis
        </a>

        {/* Mobile Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col p-6 gap-5">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-700 text-lg"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="bg-emerald-600 text-white rounded-xl py-3 text-center font-semibold"
              >
                Mulai Analisis
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
