import Container from "./ui/Container";
import AnimatedSection from "./ui/Animated";
import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import SpliteSection from "./sections/SpliteSection";
import GlassCard from "./ui/GlassCard";
import ImageCard from "./sections/ImageCard";
import Section from "./sections/Section";

import { reasons } from "../assets/data/data";
import Us from "../assets/images/us.jpg";

export default function WhyChooseUs() {
  return (
    <Section>
      <Container>
        {/* TOP SECTION */}
        <SpliteSection
          left={
            <AnimatedSection className="relative">
              {/* Main Image */}
              <ImageCard
                src={Us}
                alt="Why Choose BRYCEN"
                className="border border-slate-200 dark:border-neutral-800"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 left-6 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">
                      24/7
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Support</h3>

                    <p className="text-sm text-slate-500 dark:text-neutral-400">
                      Reliable Assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            </AnimatedSection>
          }
          right={
            <AnimatedSection delay={0.2}>
              {/* Badge */}
              <SectionBadge title="Why Choose Us" />

              {/* Title */}
              <SectionTitle
                title={
                  <>
                    Why Choose{" "}
                    <span className="text-primary">BRYCEN CAMBODIA</span>
                  </>
                }
                description="We are more than just a service provider. We become your trusted technology partner, committed to delivering innovative digital solutions with reliability, expertise, and long-term value."
              />

              {/* Small Features */}
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.slice(0, 4).map((reason, index) => (
                  <GlassCard
                    key={index}
                    className="flex items-center gap-3 p-4 transition-transform duration-300 hover:scale-105 shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h4 className="font-semibold">{reason.title}</h4>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </AnimatedSection>
          }
        />

        {/* BOTTOM FEATURES */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={0.1 * index}>
              <GlassCard className="group h-full p-8 transition-transform duration-300 hover:scale-105 shadow-lg">
                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                  <reason.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
                  {reason.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
