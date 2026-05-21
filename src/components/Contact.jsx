import { useInView, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { contactInfo } from "../assets/data/data";
import ContactImage from "../assets/images/contact.jpg";
export default function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     company: "",
  //     message: "",
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     console.log("Form submitted:", formData);
  //   };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-white"
    >
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
          <Send className="h-4 w-4 text-primary" />

          <span className="text-sm font-medium text-primary">Get in Touch</span>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Contact <span className="text-primary">Us</span>
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-neutral-300">
          Ready to transform your business? Let’s discuss how BRYCEN CAMBODIA
          can help you build modern digital solutions.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + index * 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 dark:border-neutral-800 dark:bg-neutral-900/60"
            >
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
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-full object-cover rounded-3xl border border-slate-200 shadow-lg dark:border-neutral-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
