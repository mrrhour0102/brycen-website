import { useState } from "react";

import { ExternalLink } from "lucide-react";

import Container from "./ui/Container";
import AnimatedSection from "./ui/Animated";
import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import GlassCard from "./ui/GlassCard";
import ImageCard from "./sections/ImageCard";

import { categories, projects } from "../assets/data/data";
import Section from "./sections/Section";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Section>
      <Container>
        {/* HEADER */}
        <AnimatedSection className="mb-16 text-center">
          <SectionBadge title="Our Portfolio" center />

          <SectionTitle
            center
            title={
              <>
                Our <span className="text-primary">Projects</span>
              </>
            }
            description="Explore our portfolio of successful projects across web applications, enterprise systems, mobile apps, and AI-powered solutions."
          />
        </AnimatedSection>

        {/* CATEGORY FILTER */}
        <AnimatedSection
          delay={0.2}
          className="mb-16 flex flex-wrap justify-center gap-3"
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
        </AnimatedSection>

        {/* PROJECTS GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <GlassCard className="group overflow-hidden p-0  shadow-lg transition-transform duration-300 hover:scale-105">
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <ImageCard
                    src={project.image}
                    alt={project.title}
                    className="rounded-none border-0 shadow-none"
                    imageClassName="h-68"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Button */}
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 hover:scale-110 dark:bg-neutral-900">
                      <ExternalLink className="h-6 w-6 text-primary" />
                    </button>
                  </div> */}

                  {/* Category */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-primary shadow backdrop-blur-md dark:bg-neutral-900/90">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
