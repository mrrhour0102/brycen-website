import { motion } from "framer-motion";
import { values, timeline } from "../assets/data/data";
import { CheckCircle2, Sparkles, Target } from "lucide-react";
export default function StoryPage() {
  return (
    <section className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-28 ">
        {/* Glow */}
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />

            <span className="text-sm font-medium text-primary">
              OUR JOURNEY
            </span>
          </motion.div>

          {/* Title */}
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
              delay: 0.1,
              duration: 0.8,
            }}
            className="mb-6 text-5xl font-bold tracking-tight text-black md:text-7xl dark:text-white/90 "
          >
            Building Technology
            <br />
            With Purpose
          </motion.h1>

          {/* Description */}
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
            className="mx-auto max-w-3xl text-lg leading-relaxed dark:text-white/70 "
          >
            BRYCEN CAMBODIA was created with one vision — helping businesses
            grow through reliable technology, innovation, and strong global
            collaboration.
          </motion.p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="-mt-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="BRYCEN Team"
            className="h-[420px] w-full object-cover"
          />
        </motion.div>
      </section>

      {/* STORY TIMELINE */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mb-20 text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-sm font-medium text-primary">
                OUR JOURNEY
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              The Story Behind BRYCEN
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-neutral-300">
              From a small local team to a growing technology company connected
              across Asia.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-10">
            {/* Line */}
            <div className="absolute left-6 top-0 h-full w-px bg-slate-200 dark:bg-neutral-800" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                className="relative flex gap-6"
              >
                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  <item.icon className="h-5 w-5" />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item.year}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>

                  <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <Target className="h-4 w-4 text-primary" />

              <span className="text-sm font-medium text-primary">
                OUR VALUES
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              What Drives Us
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
              We believe technology should create real impact. Our mission is
              not only to build systems — but to help businesses grow with
              confidence.
            </p>

            <div className="space-y-4">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />

                  <p className="text-slate-700 dark:text-neutral-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl dark:border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                alt="Office Meeting"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </section>
    </section>
  );
}
