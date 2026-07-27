import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BarChart3,
  MessageCircleMore,
  Database,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-cyan-50 pt-36 pb-24"
    >
      {/* Background Effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}

          <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900">
            Analisis Sentimen
            <span className="block text-emerald-600">Peraturan Impor BBM</span>
            bagi Perusahaan Swasta
          </h1>

          {/* Description */}

          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
            Menganalisis opini masyarakat terhadap kebijakan impor BBM
            menggunakan model <b>Bidirectional LSTM</b> untuk menghasilkan
            klasifikasi sentimen secara otomatis menjadi Positif, Netral, maupun
            Negatif.
          </p>

          {/* Button */}

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition text-white px-7 py-4 rounded-xl font-semibold shadow-lg">
              Mulai Analisis
              <ArrowRight size={20} />
            </button>

            <button className="px-7 py-4 rounded-xl border border-slate-300 hover:border-emerald-600 hover:text-emerald-600 transition font-semibold">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-14">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <BrainCircuit className="text-emerald-600" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">94%</h2>

              <p className="text-slate-500 mt-1">Accuracy</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <BarChart3 className="text-yellow-500" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">93%</h2>

              <p className="text-slate-500 mt-1">Precision</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <MessageCircleMore className="text-cyan-600" />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">95%</h2>

              <p className="text-slate-500 mt-1">Recall</p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}

            <div className="px-8 py-6 border-b">
              <h3 className="font-bold text-2xl text-slate-900">Dashboard</h3>

              <p className="text-slate-500">Sentiment Analysis Overview</p>
            </div>

            {/* Cards */}

            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="bg-slate-50 rounded-xl p-5">
                <p className="text-slate-500 text-sm">Total Data</p>

                <h2 className="text-3xl font-bold mt-2">1.248</h2>
              </div>

              <div className="bg-emerald-50 rounded-xl p-5">
                <p className="text-slate-500 text-sm">Positif</p>

                <h2 className="text-3xl font-bold text-emerald-600 mt-2">
                  682
                </h2>
              </div>

              <div className="bg-red-50 rounded-xl p-5">
                <p className="text-slate-500 text-sm">Negatif</p>

                <h2 className="text-3xl font-bold text-red-500 mt-2">198</h2>
              </div>
            </div>

            {/* Distribution */}

            <div className="px-6 pb-8">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h4 className="font-bold mb-6">Distribusi Sentimen</h4>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Positif</span>
                      <span>54%</span>
                    </div>

                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <div className="bg-emerald-500 h-3 rounded-full w-[54%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Netral</span>
                      <span>30%</span>
                    </div>

                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <div className="bg-yellow-400 h-3 rounded-full w-[30%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Negatif</span>
                      <span>16%</span>
                    </div>

                    <div className="w-full bg-gray-200 h-3 rounded-full">
                      <div className="bg-red-500 h-3 rounded-full w-[16%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-2xl px-6 py-5 border"
          >
            <div className="flex items-center gap-3">
              <Database className="text-emerald-600" />

              <div>
                <h4 className="font-bold">BiLSTM Model</h4>

                <p className="text-sm text-slate-500">Deep Learning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
