import GroupTeam from "../assets/images/group.png";

import Container from "./ui/Container";
import AnimatedSection from "./ui/Animated";

import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import ImageCard from "./sections/ImageCard";
import Section from "./sections/Section";

export default function Group() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <SectionBadge title="ブライセン グループ BRYCEN GROUP" />

          <SectionTitle
            center
            title={
              <>
                <span className="text-primary">BRYCEN GROUP</span>
              </>
            }
            description="
            We’re proud to be part of a dynamic technology group delivering
            innovative digital solutions across multiple industries and countries.
            Together, we combine experience, creativity, and engineering
            excellence to help businesses grow.
          "
          />
        </AnimatedSection>

        {/* Main Content */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            {/* Main Image */}
            <ImageCard
              src={GroupTeam}
              alt="BRYCEN Group"
              className="bg-white/60 p-6 backdrop-blur-md dark:bg-neutral-900/60"
            />

            {/* Decorative Glow */}
            <div className="absolute -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </AnimatedSection>

        {/* Bottom Info Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Global Collaboration",
              description:
                "Working closely with international teams across Asia.",
            },
            {
              title: "Technology Excellence",
              description:
                "Delivering modern software and infrastructure solutions.",
            },
            {
              title: "Long-Term Vision",
              description:
                "Building sustainable partnerships and innovation together.",
            },
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={0.3 + index * 0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/60">
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
