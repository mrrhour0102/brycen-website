import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Target,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { companyValues, companyServices } from "../assets/data/data";

export default function CompanyPage() {
  return (
    <section className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="Company"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Blur */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-md"
          >
            <Building2 className="h-4 w-4 text-primary" />

            <span className="text-sm font-medium text-primary">
              ABOUT OUR COMPANY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            Empowering
            <br />
            Digital Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80"
          >
            BRYCEN CAMBODIA delivers reliable technology solutions that help
            businesses grow smarter, faster, and more efficiently in a digital
            world.
          </motion.p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <Globe2 className="h-4 w-4 text-primary" />

              <span className="text-sm font-medium text-primary">
                WHO WE ARE
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Trusted Technology Partner
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
              Founded in June 2018, BRYCEN CAMBODIA started as a small BPO team
              and has grown into a modern technology company delivering digital
              solutions across multiple industries.
            </p>

            <p className="mb-8 leading-relaxed text-slate-600 dark:text-neutral-300">
              As part of BRYCEN Japan Global Group, we combine Japanese quality
              standards with local expertise to provide scalable, practical, and
              innovative solutions.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {companyServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />

                  <p className="text-sm text-slate-700 dark:text-neutral-300">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-10">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>

                <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                  To deliver practical and high-quality technology solutions
                  that empower businesses and support digital transformation.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">Our Values</h3>

                <div className="space-y-4">
                  {companyValues.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-neutral-800 dark:bg-neutral-950"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />

                      <p className="text-slate-700 dark:text-neutral-300">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-primary p-10 text-white shadow-2xl"
          >
            <div className="grid gap-10 md:grid-cols-4">
              {[
                {
                  value: "6+",
                  label: "Years Experience",
                },
                {
                  value: "500+",
                  label: "Projects Completed",
                },
                {
                  value: "200+",
                  label: "Team Members",
                },
                {
                  value: "4",
                  label: "Countries Connected",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="mb-2 text-5xl font-bold">{item.value}</h3>

                  <p className="text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-12 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Let’s Build The Future Together
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
              We help businesses transform ideas into reliable digital solutions
              through innovation, collaboration, and modern technology.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
