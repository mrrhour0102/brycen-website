import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { highlights } from "../assets/data/data";
import Team from "../assets/images/team.jpg";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="bg-slate-50  text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-primary" />

            <span className="text-sm font-medium text-primary">About Us</span>
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            We Are <span className="text-primary">BRYCEN CAMBODIA</span>
          </h2>

          {/* Paragraphs */}
          <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
            BRYCEN CAMBODIA is a Japanese-owned IT company operating as a
            subsidiary of BRYCEN Group, specializing in software development,
            system integration, and IT consulting services.
          </p>

          <p className="mb-8 leading-relaxed text-slate-600 dark:text-neutral-300">
            We combine Japanese quality standards with local expertise to
            deliver innovative digital solutions that empower businesses and
            accelerate growth.
          </p>

          {/* Highlights */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + index * 0.1,
                }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-primary/10"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />

                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-neutral-800">
            <img
              src={Team}
              alt="Team"
              className=" w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-8 -left-4 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Years</h3>

                <p className="text-sm text-slate-500 dark:text-neutral-400">
                  of Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Blur */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />

          {/* Decorative Border */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-3xl border-4 border-primary/20" />
        </motion.div>
      </div>
    </section>
  );
}
