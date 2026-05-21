import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { reasons } from "../assets/data/data";
import Us from "../assets/images/us.jpg";
export function WhyChooseUs() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* Top Section */}
      <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-neutral-800">
            <img
              src={Us}
              alt="Global Technology"
              className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" /> */}
          </div>

          {/* Floating Decorative Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-6 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-primary/30"
          />

          {/* Glow Effect */}
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-primary/20 blur-3xl" />

          {/* Floating Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 left-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">24/7</span>
              </div>

              <div>
                <h3 className="text-lg font-bold">Support</h3>

                <p className="text-sm text-slate-500 dark:text-neutral-400">
                  Reliable Assistance
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-primary" />

            <span className="text-sm font-medium text-primary">
              Why Choose Us
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Why Choose <span className="text-primary">BRYCEN CAMBODIA</span>
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
            We are more than just a service provider. We become your trusted
            technology partner, committed to delivering innovative digital
            solutions with reliability, expertise, and long-term value.
          </p>

          {/* Small Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.slice(0, 4).map((reason, index) => (
              <motion.div
                key={reason.title}
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
                  delay: 0.2 + index * 0.1,
                }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-primary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold">{reason.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Features */}
      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.4 + index * 0.1,
            }}
            className="group rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            {/* Icon */}
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <reason.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
              {reason.title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
