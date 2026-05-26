import { Building2, Globe2, Target, Heart, ArrowRight } from "lucide-react";

import { companyValues, companyServices } from "../assets/data/data";

import Container from "../components/ui/Container";
import AnimatedSection from "../components/ui/Animated";

import SectionBadge from "../components/sections/SectionBadge";
import SectionTitle from "../components/sections/SectionTitle";
import SplitSection from "../components/sections/SpliteSection";
import FeatureList from "../components/sections/FeatureList";
import CTASection from "../components/sections/CTASection";
import Section from "../components/sections/Section";

export default function CompanyPage() {
  return (
    <Section>
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="Company"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        {/* Blur */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        {/* Content */}
        <Container className="relative">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-md">
              <Building2 className="h-4 w-4 text-primary" />

              <span className="text-sm font-medium text-primary">
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Empowering
              <br />
              Digital Innovation
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80">
              BRYCEN CAMBODIA delivers reliable technology solutions that help
              businesses grow smarter, faster, and more efficiently.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24">
        <Container>
          <SplitSection
            className="items-center"
            left={
              <AnimatedSection>
                {/* Badge */}
                <SectionBadge title="Who We Are" icon={Globe2} />

                {/* Title */}
                <SectionTitle
                  title="Trusted Technology Partner"
                  description="Founded in June 2018, BRYCEN CAMBODIA started as a small BPO team and has grown into a modern technology company delivering digital solutions across industries."
                />

                {/* Extra Text */}
                <p className="mb-10 leading-relaxed text-slate-600 dark:text-neutral-300">
                  As part of BRYCEN Japan Global Group, we combine Japanese
                  quality standards with local expertise to provide scalable and
                  innovative solutions.
                </p>

                {/* Services */}
                <FeatureList items={companyServices} />
              </AnimatedSection>
            }
            right={
              <AnimatedSection delay={0.2}>
                <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
                  {/* Mission */}
                  <div className="mb-10">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Target className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>

                    <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                      To deliver practical and high-quality technology solutions
                      that empower businesses and support digital
                      transformation.
                    </p>
                  </div>

                  {/* Values */}
                  <div>
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="mb-5 text-2xl font-bold">Our Values</h3>

                    <FeatureList items={companyValues} />
                  </div>
                </div>
              </AnimatedSection>
            }
          />
        </Container>
      </section>

      {/* STATS */}
      <section className="pb-24">
        <Container>
          <AnimatedSection>
            <div className="rounded-3xl bg-primary p-10 text-white shadow-2xl">
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
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Let’s Build The Future Together"
        description="We help businesses transform ideas into reliable digital solutions through innovation, collaboration, and modern technology."
        buttonText="Contact Us"
        icon={ArrowRight}
      />
    </Section>
  );
}
