import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { servicesPage, featuresPage } from "../assets/data/data";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function ServiceSolutionPage() {
  return (
    <section className="bg-slate-50 text-slate-900 dark:bg-neutral-950 dark:text-white transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
            alt="Office"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Blur Effects */}
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-white" />

              <span className="text-sm font-medium text-white">
                SERVICES & SOLUTIONS
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Smart Digital
              <br />
              Solutions
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
              We help businesses grow through modern software development,
              AI-powered solutions, and scalable technology services.
            </p>

            {/* Service Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {servicesPage.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-2 text-sm font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/70 line-clamp-2">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/90 p-10 shadow-2xl backdrop-blur-xl dark:bg-neutral-900/90">
              <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
                Why Businesses Choose Us
              </h2>

              <p className="mb-8 leading-relaxed text-slate-600 dark:text-neutral-300">
                BRYCEN CAMBODIA combines innovation, reliability, and modern
                technology to create digital solutions that help businesses move
                faster and smarter.
              </p>

              <div className="space-y-4">
                {featuresPage.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />

                    <p className="text-sm text-slate-700 dark:text-neutral-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Technology"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-sm font-medium text-primary">
                Core Advantages
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Technology That
              <span className="text-primary"> Drives Growth</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
              Our team delivers modern and scalable technology solutions with a
              strong focus on performance, security, and long-term business
              success.
            </p>

            <div className="space-y-5">
              {featuresPage.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />

                  <p className="text-slate-700 dark:text-neutral-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
