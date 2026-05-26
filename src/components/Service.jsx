import Container from "./ui/Container";
import AnimatedSection from "./ui/Animated";
import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import GlassCard from "./ui/GlassCard";

import { features_with_icon, services_with_icon } from "../assets/data/data";
import Section from "./sections/Section";

export default function Services() {
  return (
    <Section>
      <Container>
        {/* HEADER */}
        <AnimatedSection className="mb-20 text-center">
          <SectionBadge title="Our Expertise" center />

          <SectionTitle
            center
            title={
              <>
                What We <span className="text-primary">Do Best</span>
              </>
            }
            description={
              <>
                Discover how
                <span className="mx-1 font-semibold text-primary">
                  BRYCEN CAMBODIA
                </span>
                transforms businesses through innovative technology solutions
                and professional IT services.
              </>
            }
          />
        </AnimatedSection>

        {/* SERVICES */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services_with_icon.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <GlassCard className="group overflow-hidden p-0 shadow-2xl transition-shadow duration-300 hover:shadow-lg">
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-neutral-900">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features_with_icon.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={0.3 + index * 0.1}>
              <GlassCard className="group flex items-start gap-4 shadow-lg p-4 transition-shadow duration-300 hover:shadow-lg">
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h4 className="mb-2 text-[17px] font-semibold">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
                    {feature.description}
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
