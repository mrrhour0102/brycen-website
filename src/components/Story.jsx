import { milestones, services } from "../assets/data/data";

import Container from "./ui/Container";
import AnimatedSection from "./ui/Animated";

import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import ImageCard from "./sections/ImageCard";

import { Calendar } from "lucide-react";
import Section from "./sections/Section";

export default function Story() {
  return (
    <Section>
      <Container>
        {/* HEADER */}
        <AnimatedSection className="mb-20 text-center">
          <SectionBadge title="Our Journey" icon={Calendar} />

          <SectionTitle
            center
            title={
              <>
                Our <span className="text-primary">Story</span>
              </>
            }
            description="
              From humble beginnings to becoming a trusted technology partner,
              BRYCEN Cambodia continues to deliver innovation, reliability,
              and excellence for businesses across industries.
            "
          />
        </AnimatedSection>

        {/* TIMELINE */}
        <div className="grid gap-8 md:grid-cols-3">
          {milestones.map((milestone, index) => (
            <AnimatedSection key={milestone.year} delay={index * 0.15}>
              <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900/60">
                {/* Image */}
                <div className="relative">
                  <ImageCard
                    src={milestone.image}
                    alt={milestone.title}
                    className="rounded-none border-0 shadow-none"
                    imageClassName="h-56"
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
            </AnimatedSection>
          ))}
        </div>

        {/* SERVICES */}
        <div className="mt-24 flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.4 + index * 0.1}>
              <div className="group text-center">
                {/* Icon Card */}
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:bg-primary/5 dark:border-neutral-800 dark:bg-neutral-900/60 dark:group-hover:bg-primary/10">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Title */}
                <p className="text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-primary dark:text-neutral-300">
                  {service.title}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
