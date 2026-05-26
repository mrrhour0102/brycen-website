import { Send } from "lucide-react";

import { contactInfo } from "../assets/data/data";
import ContactImage from "../assets/images/contact.jpg";

import Container from "./ui/Container";
import AnimatedSection from "./ui/Animated";

import SectionBadge from "./sections/SectionBadge";
import SectionTitle from "./sections/SectionTitle";
import ImageCard from "./sections/ImageCard";
import Section from "./sections/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        {/* HEADER */}
        <AnimatedSection className="mb-20 text-center">
          <SectionBadge title="Get in Touch" icon={Send} />

          <SectionTitle
            center
            title={
              <>
                Contact <span className="text-primary">Us</span>
              </>
            }
            description="
              Ready to transform your business? Let’s discuss how
              BRYCEN CAMBODIA can help you build modern digital solutions.
            "
          />
        </AnimatedSection>

        {/* CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="grid gap-6 sm:grid-cols-2">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={item.title} delay={0.2 + index * 0.1}>
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 dark:border-neutral-800 dark:bg-neutral-900/60">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold">{item.title}</h3>

                  {/* Details */}
                  <div className="space-y-1">
                    {item.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-slate-600 dark:text-neutral-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* RIGHT */}
          <AnimatedSection delay={0.4}>
            <ImageCard
              src={ContactImage}
              alt="Contact"
              className="h-full"
              imageClassName="h-full min-h-[500px]"
            />
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
