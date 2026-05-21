import { motion } from "framer-motion";
import { newsList } from "../assets/data/data";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  Newspaper,
  Phone,
  MapPin,
} from "lucide-react";
export default function NewsTopicsPage() {
  return (
    <section className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop"
            alt="City"
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
            <Newspaper className="h-4 w-4 text-primary" />

            <span className="text-sm font-medium text-primary">
              NEWS & TOPICS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
          >
            Latest News
            <br />& Updates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80"
          >
            Stay updated with the latest company announcements, office
            expansion, team growth, and company milestones from BRYCEN CAMBODIA.
          </motion.p>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* TOP INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <CalendarDays className="h-4 w-4 text-primary" />

              <span className="text-sm font-medium text-primary">
                COMPANY NEWS
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight">
              Stay Connected With BRYCEN CAMBODIA
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
              We continuously grow through innovation, teamwork, and regional
              collaboration. Here are some important updates and milestones from
              our company journey.
            </p>
          </motion.div>

          {/* NEWS CARDS */}
          <div className="space-y-8">
            {newsList.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  {/* LEFT */}
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-medium text-primary">
                        {item.date}
                      </p>

                      <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>

                      <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  {/* <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 rounded-3xl bg-primary p-10 text-center text-white shadow-2xl"
          >
            <h2 className="mb-4 text-4xl font-bold">Follow Our Journey</h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Stay connected with BRYCEN CAMBODIA for future updates, technology
              news, company activities, and business growth stories.
            </p>

            <button className="rounded-full bg-white px-8 py-4 font-medium text-primary transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
