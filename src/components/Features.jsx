import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  History,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Real-time Analysis",
    description:
      "Menganalisis komentar secara real-time sehingga hasil dapat diperoleh dengan cepat dan akurat.",
    icon: Zap,
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Confidence Score",
    description:
      "Menampilkan tingkat kepercayaan model pada setiap hasil prediksi sentimen.",
    icon: ShieldCheck,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Interactive Dashboard",
    description:
      "Visualisasi data interaktif untuk melihat distribusi dan tren sentimen.",
    icon: BarChart3,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Deep Learning BiLSTM",
    description:
      "Menggunakan model Bidirectional LSTM sehingga mampu memahami konteks kalimat.",
    icon: BrainCircuit,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "History Analysis",
    description:
      "Riwayat analisis tersimpan sehingga pengguna dapat melakukan evaluasi kembali.",
    icon: History,
    color: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    title: "Responsive UI",
    description:
      "Antarmuka modern yang responsif dan nyaman digunakan di desktop maupun mobile.",
    icon: Smartphone,
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full bg-emerald-100 text-emerald-600 font-semibold">
            ✨ Fitur Unggulan
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mt-6 text-slate-900">
          Mengapa Memilih SentimentAI?
        </h2>

        <p className="text-center text-slate-500 mt-5 max-w-3xl mx-auto leading-8">
          Website ini dilengkapi berbagai fitur modern yang membantu proses
          analisis sentimen menjadi lebih cepat, akurat, dan mudah dipahami.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group bg-white rounded-3xl border border-slate-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color}`}
                >
                  <Icon
                    size={32}
                    className={`${feature.iconColor} group-hover:scale-110 transition`}
                  />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-500 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
