import { motion } from "framer-motion";

const PhoneMockup = () => {
  const grades = [
    { subject: "Matematika", grade: 5, color: "text-green-400" },
    { subject: "Magyar nyelv", grade: 4, color: "text-blue-400" },
    { subject: "Történelem", grade: 5, color: "text-green-400" },
    { subject: "Angol nyelv", grade: 4, color: "text-blue-400" },
    { subject: "Fizika", grade: 3, color: "text-yellow-400" },
  ];

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 blur-3xl bg-[radial-gradient(ellipse_at_center,hsl(173_80%_50%/0.3)_0%,transparent_60%)] scale-150" />
      
      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] bg-gradient-to-b from-[hsl(222_47%_15%)] to-[hsl(222_47%_10%)] p-3 shadow-2xl border border-[hsl(222_30%_25%)]">
        {/* Screen bezel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[hsl(222_47%_8%)] rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="relative w-full h-full rounded-[2.25rem] bg-[hsl(222_47%_8%)] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-3 text-xs text-muted-foreground">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 rounded-sm border border-muted-foreground/50" />
            </div>
          </div>

          {/* App header */}
          <div className="px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(199_89%_48%)] flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">r</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">reKréta</h3>
                <p className="text-xs text-muted-foreground">Jó reggelt, Dávid! 👋</p>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="px-5 py-2">
            <div className="flex gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex-1 p-3 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="text-2xl font-bold gradient-text">4.52</div>
                <div className="text-[10px] text-muted-foreground">Átlag</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex-1 p-3 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-[10px] text-muted-foreground">Óra ma</div>
              </motion.div>
            </div>
          </div>

          {/* Grades list */}
          <div className="px-5 py-4">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Legutóbbi jegyek</h4>
            <div className="space-y-2">
              {grades.map((item, index) => (
                <motion.div
                  key={item.subject}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <span className="text-sm text-foreground">{item.subject}</span>
                  <span className={`text-lg font-bold ${item.color}`}>{item.grade}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom nav hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-foreground/20" />
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
