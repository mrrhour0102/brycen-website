import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";
import { categories, projects } from "../assets/data/data";
import { ExternalLink } from "lucide-react";
export default function Projects() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-primary" />

            <span className="text-sm font-medium text-primary">
              Our Portfolio
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Our <span className="text-primary">Projects</span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
            Explore our portfolio of successful projects across Web
            Applications, Mobile Apps, Enterprise Software, and AI-powered
            solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-black shadow-lg shadow-primary/20"
                  : "border border-slate-200 bg-white/70 text-slate-600 hover:border-primary/30 hover:bg-primary/5 hover:text-primary dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
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
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900/60">
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl"
                    >
                      <ExternalLink className="h-6 w-6 text-primary" />
                    </motion.button>
                  </div>

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-primary shadow backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
