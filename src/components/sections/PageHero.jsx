import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* <div className="absolute inset-0 bg-linear-to-r from-primary/70 to-black/40" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
