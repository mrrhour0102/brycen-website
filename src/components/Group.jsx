import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { locations, partners } from "../assets/data/data";
import GroupTeam from "../assets/images/group.png";
export function Group() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-primary" />

          <span className="text-sm font-medium text-primary">
            ブライセン グループ BRYCEN GROUP
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          <span className="text-primary">BRYCEN GROUP</span>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
          We’re proud to be part of a dynamic group of businesses and expert
          teams working together to deliver cutting-edge technology solutions
          across industries. Each member of our group brings unique skills,
          experience, and innovation — all driven by a shared commitment to
          helping our clients succeed.
        </p>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{ delay: 0.3 }}
        className="relative mx-auto mb-20 max-w-5xl"
      >
        <img
          src={GroupTeam}
          alt="Group"
          className="mx-auto max-w-full"
          loading="lazy"
        />
      </motion.div>

      {/* Partners */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-neutral-400">
          Trusted Technology Partners
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                delay: 0.8 + index * 0.1,
              }}
              className="rounded-2xl border border-slate-200 bg-white/70 px-6 py-4 text-lg font-bold text-slate-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* Stats */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-16 dark:border-neutral-800 md:grid-cols-4"
      >
        {[
          {
            value: "4",
            label: "Countries",
          },
          {
            value: "200+",
            label: "Employees",
          },
          {
            value: "500+",
            label: "Projects",
          },
          {
            value: "10+",
            label: "Years",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 1 + index * 0.1,
            }}
            className="rounded-3xl border border-slate-200 bg-white/70 p-8 text-center shadow-md backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            <p className="text-4xl font-bold text-primary md:text-5xl">
              {stat.value}
            </p>

            <p className="mt-3 text-slate-600 dark:text-neutral-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div> */}
    </section>
  );
}
