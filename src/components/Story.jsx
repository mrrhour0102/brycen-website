import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";
import { milestones, services } from "../assets/data/data";

export default function Story() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
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
          <Calendar className="h-4 w-4 text-primary" />

          <span className="text-sm font-medium text-primary">Our Journey</span>
        </div>

        {/* Title */}
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Our <span className="text-primary">Story</span>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
          From humble beginnings to becoming a trusted technology partner,
          BRYCEN Cambodia continues to deliver innovation, reliability, and
          excellence for businesses across industries.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="grid gap-8 md:grid-cols-3">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            className="group"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900/60">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                {/* Year */}
                <span className="absolute bottom-4 left-4 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-black shadow-lg">
                  {milestone.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">{milestone.title}</h3>

                <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-20 flex flex-wrap justify-center gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="group text-center"
          >
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 dark:border-neutral-800 dark:bg-neutral-900/60 dark:group-hover:bg-primary/10">
              <img
                src={service.icon}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-primary dark:text-neutral-300">
              {service.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
