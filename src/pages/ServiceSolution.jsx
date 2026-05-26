import { servicesPage, featuresPage } from "../assets/data/data";

import Container from "../components/ui/Container";
import AnimatedSection from "../components/ui/Animated";
import SectionBadge from "../components/sections/SectionBadge";
import SectionTitle from "../components/sections/SectionTitle";
import SplitSection from "../components/sections/SpliteSection";
import FeatureList from "../components/sections/FeatureList";
import ImageCard from "../components/sections/ImageCard";

import { Sparkles } from "lucide-react";
import Section from "../components/sections/Section";

export default function ServiceSolutionPage() {
  return (
    <Section>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
            alt="Office"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        {/* Blur Effects */}
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <Container className="relative">
          <SplitSection
            className="items-center"
            left={
              <AnimatedSection>
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-white" />

                  <span className="text-sm font-medium text-white">
                    SERVICES & SOLUTIONS
                  </span>
                </div>

                {/* Title */}
                <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  Smart Digital
                  <br />
                  Solutions
                </h1>

                {/* Description */}
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
                  We help businesses grow through modern software development,
                  AI-powered systems, and scalable technology services.
                </p>

                {/* Services */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {servicesPage.map((service, index) => (
                    <AnimatedSection key={service.title} delay={0.1 * index}>
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                        {/* Icon */}
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="mb-2 text-sm font-bold text-white">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-white/70">
                          {service.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            }
            right={
              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-white/10 bg-white/90 p-10 shadow-2xl backdrop-blur-xl dark:bg-neutral-900/90">
                  {/* Badge */}
                  <SectionBadge title="Why Choose Us" />

                  {/* Title */}
                  <SectionTitle
                    title={
                      <>
                        Technology That
                        <span className="text-primary"> Drives Growth</span>
                      </>
                    }
                    description="BRYCEN CAMBODIA combines innovation, reliability, and modern technology to create scalable digital solutions for businesses."
                  />

                  {/* Features */}
                  <FeatureList items={featuresPage} />
                </div>
              </AnimatedSection>
            }
          />
        </Container>
      </section>

      {/* SECOND SECTION */}
      <section className="py-24">
        <Container>
          <SplitSection
            className="items-center"
            left={
              <AnimatedSection>
                {/* Image */}
                <ImageCard
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="Technology"
                />
              </AnimatedSection>
            }
            right={
              <AnimatedSection delay={0.2}>
                {/* Badge */}
                <SectionBadge title="Core Advantages" />

                {/* Title */}
                <SectionTitle
                  title={
                    <>
                      Modern Solutions
                      <span className="text-primary"> For Business</span>
                    </>
                  }
                  description="Our team delivers secure, scalable, and high-performance solutions designed to help businesses operate smarter and faster."
                />

                {/* Features */}
                <FeatureList items={featuresPage} />
              </AnimatedSection>
            }
          />
        </Container>
      </section>
    </Section>
  );
}
