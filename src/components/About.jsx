import { motion } from "framer-motion";
import {
  Database,
  FileText,
  BrainCircuit,
  MessageSquareText,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Data Collection",
    icon: Database,
    color: "emerald",
    description:
      "Mengumpulkan komentar dan opini masyarakat mengenai kebijakan impor BBM dari berbagai platform seperti X (Twitter), berita online, dan forum diskusi.",
  },
  {
    id: "2",
    title: "Text Preprocessing",
    icon: FileText,
    color: "amber",
    description:
      "Melakukan case folding, cleaning, tokenizing, stopword removal, dan stemming agar data siap diproses oleh model.",
  },
  {
    id: "3",
    title: "Training Model",
    icon: BrainCircuit,
    color: "emerald",
    description:
      "Melatih model Bidirectional LSTM untuk memahami konteks kalimat dan pola sentimen pada data teks.",
  },
  {
    id: "4",
    title: "Prediction",
    icon: MessageSquareText,
    color: "red",
    description:
      "Menghasilkan prediksi sentimen berupa Positif, Netral, atau Negatif beserta tingkat kepercayaan model.",
  },
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-500",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-500",
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Badge */}

        <div className="flex justify-center">
          <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full">
            ⚙️ Proses Sistem
          </span>
        </div>

        {/* Title */}

        <h2 className="text-4xl font-bold text-center text-slate-900 mt-5">
          Bagaimana Sistem Bekerja?
        </h2>

        <p className="text-slate-500 text-center max-w-2xl mx-auto mt-4">
          Sistem analisis sentimen memproses data teks melalui beberapa tahapan
          mulai dari pengumpulan data hingga menghasilkan prediksi sentimen
          menggunakan model Bidirectional LSTM.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 gap-6 mt-16">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-7 h-full hover:-translate-y-2 transition duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colorClasses[item.color].bg}`}
                  >
                    <Icon size={32} className={colorClasses[item.color].text} />
                  </div>

                  <h3 className="mt-6 font-bold text-xl text-slate-900">
                    {item.id}. {item.title}
                  </h3>

                  <p className="mt-4 text-slate-500 leading-7 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}

                {index !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="text-slate-400" size={28} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
