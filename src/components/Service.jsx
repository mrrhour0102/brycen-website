import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { features_with_icon, services_with_icon } from "../assets/data/data";

export function Services() {
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
          <div className="h-2 w-2 rounded-full bg-primary" />

          <span className="text-sm font-medium text-primary">
            Our Expertise
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          What We <span className="text-primary">Do Best</span>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
          Discover how
          <span className="font-semibold text-primary">BRYCEN CAMBODIA</span>
          transforms businesses through innovative technology solutions and
          professional IT services.
        </p>
      </motion.div>

      {/* Main Service Cards */}
      <div className="mb-20 grid gap-8 md:grid-cols-3">
        {services_with_icon.map((service, index) => (
          <motion.div
            key={service.title}
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
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <div className="grid gap-6 md:grid-cols-3">
        {features_with_icon.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.5 + index * 0.1,
            }}
            className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <feature.icon className="h-7 w-7 text-primary" />
            </div>

            {/* Content */}
            <div>
              <h4 className="mb-2 text-lg font-semibold">{feature.title}</h4>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
