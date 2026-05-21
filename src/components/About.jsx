import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { highlights } from "../assets/data/data";
import Team from "../assets/images/team.jpg";
import Container from "./ui/Container";
import SplitSection from "./sections/SpliteSection";
import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import FeatureList from "./sections/FeatureList";
import ImageCard from "./sections/ImageCard";
import Animated from "./ui/Animated";

export default function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className="bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <Container>
        <div ref={ref}>
          <SplitSection
            left={
              <Animated>
                <SectionBadge title="About Us" />
                <SectionTitle
                  title={
                    <>
                      We Are
                      <span className="text-primary">BRYCEN CAMBODIA</span>
                    </>
                  }
                  description="BRYCEN CAMBODIA is a Japanese-owned IT company operating as a subsidiary of BRYCEN Group, specializing in software development, system integration, and IT consulting services."
                />
                <p className="mb-10 leading-relaxed text-slate-600 dark:text-neutral-300">
                  We combine Japanese quality standards with local expertise to
                  deliver innovative digital solutions that empower businesses
                  and accelerate growth.
                </p>
                <FeatureList items={highlights} />
              </Animated>
            }
            right={
              <Animated delay={0.2} className="relative">
                <ImageCard
                  src={Team}
                  alt="BRYCEN Team"
                  className=" border border-slate-200 dark:border-neutral-800"
                />
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.5,
                  }}
                  className="absolute -bottom-6 -left-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/90"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-2xl font-bold text-primary">
                        10+
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Years</h3>
                      <p className="text-sm text-slate-500 dark:text-neutral-400">
                        of Excellence
                      </p>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              </Animated>
            }
          />
        </div>
      </Container>
    </section>
  );
}
