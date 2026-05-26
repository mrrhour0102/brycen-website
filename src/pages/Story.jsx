import { motion } from "framer-motion";
import { values, timeline } from "../assets/data/data";
import { Sparkles, Target, CheckCircle2 } from "lucide-react";

/* Reusable Components */
import Container from "../components/ui/Container";
import AnimatedSection from "../components/ui/Animated";
import SectionBadge from "../components/sections/SectionBadge";
import SectionTitle from "../components/sections/SectionTitle";
import SplitSection from "../components/sections/SpliteSection";
import ImageCard from "../components/sections/ImageCard";
import TimelineSection from "../components/sections/TimelineSection";
import FeatureList from "../components/sections/FeatureList";
import Section from "../components/sections/Section";

export default function StoryPage() {
  return (
    <Section>
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        <Container className="text-center">
          <AnimatedSection>
            <SectionBadge icon={Sparkles} title="OUR JOURNEY" center />

            <SectionTitle
              center
              title={
                <>
                  Building Technology
                  <br />
                  <span className="text-primary">With Purpose</span>
                </>
              }
              description="BRYCEN CAMBODIA was created with one vision — helping businesses grow through reliable technology, innovation, and strong global collaboration."
              maxWidth="max-w-3xl"
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* TEAM IMAGE */}
      <section className="-mt-10 pb-24">
        <Container>
          <AnimatedSection>
            <ImageCard
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
              alt="BRYCEN Team"
              className="overflow-hidden rounded-3xl shadow-2xl"
              imageClassName="h-[420px] w-full object-cover"
            />
          </AnimatedSection>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="pb-28">
        <Container>
          <AnimatedSection className="mb-20 text-center">
            <SectionBadge title="OUR STORY" center />

            <SectionTitle
              center
              title={
                <>
                  The Story Behind
                  <span className="text-primary"> BRYCEN</span>
                </>
              }
              description="From a small local team to a growing technology company connected across Asia."
              maxWidth="max-w-2xl"
            />
          </AnimatedSection>

          <TimelineSection items={timeline} />
        </Container>
      </section>

      {/* VALUES */}
      <section className="pb-28">
        <Container>
          <SplitSection
            left={
              <AnimatedSection direction="left">
                <SectionBadge icon={Target} title="OUR VALUES" />

                <SectionTitle
                  title={
                    <>
                      What
                      <span className="text-primary"> Drives Us</span>
                    </>
                  }
                  description="We believe technology should create real impact. Our mission is not only to build systems — but to help businesses grow with confidence."
                />

                <FeatureList items={values} icon={CheckCircle2} />
              </AnimatedSection>
            }
            right={
              <AnimatedSection direction="right" className="relative">
                <ImageCard
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  alt="Office Meeting"
                  imageClassName="h-[420px] w-full object-cover"
                />

                <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              </AnimatedSection>
            }
          />
        </Container>
      </section>
    </Section>
  );
}
