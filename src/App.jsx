import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2463ff] to-[#7b5cff] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Háttér animált körök */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px]"
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
        animate={{ y: [0, -40, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Tartalom */}
      <main className="z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          re<span className="text-white/80">Kréta</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-white/90 mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Több, mint napló.
        </motion.h2>

        {/* Üvegkártya “Hamarosan elérhető” */}
        <motion.div
          className="glass px-8 py-6 rounded-2xl shadow-xl inline-block border border-white/10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl font-medium tracking-wide">
            🚀 Hamarosan elérhető
          </p>
        </motion.div>

        {/* Lábjegyzet */}
        <motion.footer
          className="mt-16 text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          © {new Date().getFullYear()} reKréta • Egy új generációs e-napló
        </motion.footer>
      </main>
    </div>
  );
}
