import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Send, Smile, Meh, Frown } from "lucide-react";

export default function Demo() {
  const [text, setText] = useState("");

  const [result, setResult] = useState({
    sentiment: "",
    confidence: 0,
    positive: 0,
    neutral: 0,
    negative: 0,
    keywords: [],
  });

  const handleAnalysis = () => {
    if (text.trim() === "") {
      alert("Silakan masukkan komentar terlebih dahulu.");
      return;
    }

    const sentence = text.toLowerCase();

    // Dummy Prediction

    if (
      sentence.includes("bagus") ||
      sentence.includes("baik") ||
      sentence.includes("setuju") ||
      sentence.includes("membantu") ||
      sentence.includes("mantap") ||
      sentence.includes("efektif")
    ) {
      setResult({
        sentiment: "Positif",
        confidence: 94,
        positive: 94,
        neutral: 4,
        negative: 2,
        keywords: ["Bagus", "Membantu", "Efektif", "BBM"],
      });
    } else if (
      sentence.includes("buruk") ||
      sentence.includes("jelek") ||
      sentence.includes("tolak") ||
      sentence.includes("mahal") ||
      sentence.includes("kecewa") ||
      sentence.includes("merugikan")
    ) {
      setResult({
        sentiment: "Negatif",
        confidence: 92,
        positive: 3,
        neutral: 5,
        negative: 92,
        keywords: ["Buruk", "Mahal", "Merugikan", "BBM"],
      });
    } else {
      setResult({
        sentiment: "Netral",
        confidence: 86,
        positive: 12,
        neutral: 86,
        negative: 2,
        keywords: ["Peraturan", "BBM", "Impor"],
      });
    }
  };

  const getIcon = () => {
    switch (result.sentiment) {
      case "Positif":
        return <Smile size={70} className="text-green-500" />;

      case "Negatif":
        return <Frown size={70} className="text-red-500" />;

      case "Netral":
        return <Meh size={70} className="text-yellow-500" />;

      default:
        return <BrainCircuit size={70} className="text-slate-400" />;
    }
  };

  const getColor = () => {
    switch (result.sentiment) {
      case "Positif":
        return "text-green-600";

      case "Negatif":
        return "text-red-600";

      case "Netral":
        return "text-yellow-500";

      default:
        return "text-slate-600";
    }
  };

  return (
    <section
      id="demo"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center">
          <span className="inline-block bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full font-semibold">
            🚀 Demo
          </span>

          <h2 className="text-5xl font-bold mt-6">Demo Analisis Sentimen</h2>

          <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
            Coba masukkan komentar mengenai kebijakan impor BBM bagi perusahaan
            swasta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {/* INPUT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Masukkan Komentar</h3>

            <textarea
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Contoh: Kebijakan impor BBM ini sangat membantu perusahaan swasta..."
              className="w-full border rounded-2xl p-5 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />

            <p className="text-sm text-slate-400 mt-2">
              {text.length} karakter
            </p>

            <button
              onClick={handleAnalysis}
              className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl flex justify-center items-center gap-3 transition"
            >
              <Send size={20} />
              Analisis Sentimen
            </button>
          </motion.div>

          {/* RESULT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8"
          >
            <div className="flex items-center gap-4">
              {getIcon()}

              <div>
                <h2 className={`text-4xl font-bold ${getColor()}`}>
                  {result.sentiment || "Belum Ada Hasil"}
                </h2>

                <p className="text-slate-500 mt-1">Confidence Score</p>

                <h3 className="text-3xl font-bold mt-2">
                  {result.confidence}%
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Positif</span>

                  <span>{result.positive}%</span>
                </div>

                <div className="bg-slate-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${result.positive}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Netral</span>

                  <span>{result.neutral}%</span>
                </div>

                <div className="bg-slate-200 h-3 rounded-full">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{
                      width: `${result.neutral}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Negatif</span>

                  <span>{result.negative}%</span>
                </div>

                <div className="bg-slate-200 h-3 rounded-full">
                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{
                      width: `${result.negative}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-bold text-xl mb-4">Keyword Terdeteksi</h3>

              <div className="flex flex-wrap gap-3">
                {result.keywords.length > 0 ? (
                  result.keywords.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400">Belum ada keyword.</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
