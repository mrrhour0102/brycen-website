import {
  Award,
  Brain,
  BrainCircuit,
  Building2,
  Clock,
  Cloud,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MonitorSmartphone,
  PartyPopper,
  Phone,
  Rocket,
  Shield,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// Navbar Sections
export const navItems = [
  { id: "/", key: "Home" },
  { id: "/service-solution", key: "Services/Solution" },
  { id: "/story", key: "Story" },
  { id: "/company", key: "Company" },
  { id: "/new-topic", key: "New Topic" },

  // { id: "/ai", key: "ai" },
  // { id: "/news", key: "news" },
  // { id: "/voice", key: "voice" },
  // { id: "/about", key: "about" },
  // { id: "/service", key: "service" },
  // { id: "/faq", key: "faq" },
  // { id: "/recruitment", key: "recruitment" },
];

// Footer Sections
export const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#projects" },
  ],
  services: [
    { name: "Software Development", href: "#services" },
    { name: "System Integration", href: "#services" },
    { name: "IT Consulting", href: "#services" },
    { name: "Offshore Development", href: "#services" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};
export const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

// About Section
export const highlights = [
  "Japanese Quality Standards",
  "10+ Years of Experience",
  "Certified IT Professionals",
  "Agile Development Process",
];

// Story Section
export const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description:
      "BRYCEN Cambodia was established as a subsidiary of BRYCEN Group Japan.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2017",
    title: "Expansion Phase",
    description:
      "Expanded our team and services to meet growing demand across Southeast Asia.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched new AI and cloud solutions to help businesses adapt to remote work.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];
export const services = [
  {
    title: "Software Development",
    icon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "IT Service Development",
    icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Offshore Development",
    icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

// Service Section
export const services_with_icon = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs using cutting-edge technologies and methodologies.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Database,
    title: "System Integration",
    description:
      "Seamless integration of various systems and applications to optimize your business operations and workflow.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with the latest frameworks and best practices for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];
export const features_with_icon = [
  {
    icon: Shield,
    title: "IT Consulting & Managed Services",
    description:
      "Expert guidance on IT strategy, infrastructure management, and ongoing support services.",
  },
  {
    icon: Cpu,
    title: "AI & Data Analytics",
    description:
      "Leverage artificial intelligence and data analytics to gain actionable insights.",
  },
  {
    icon: Users,
    title: "Offshore Development",
    description:
      "Cost-effective offshore development services with Japanese quality standards.",
  },
];

// Why Choose Us Section
export const reasons = [
  {
    icon: Users,
    title: "Client Expertise, Best Results",
    description:
      "Our experienced team combines technical excellence with deep industry knowledge to deliver solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Technical Excellence - As Our First Priority",
    description:
      "We maintain the highest standards of quality in every project, following Japanese development methodologies and best practices.",
  },
  {
    icon: Clock,
    title: "Quality & Accuracy Over Fast Track",
    description:
      "We prioritize delivering accurate, high-quality solutions over rushing to meet deadlines, ensuring long-term success.",
  },
  {
    icon: Headphones,
    title: "Help Clients & Responsively",
    description:
      "Our dedicated support team is always ready to assist, providing timely responses and solutions to your concerns.",
  },
  {
    icon: Rocket,
    title: "Innovative Approach",
    description:
      "We stay ahead of technology trends to bring innovative solutions that give your business a competitive edge.",
  },
  {
    icon: Shield,
    title: "Security First Mindset",
    description:
      "Enterprise-grade security measures protect your data and systems throughout the development lifecycle.",
  },
];

// Projects Section
export const categories = ["All", "Web Apps", "Mobile Apps", "Custom Software"];
export const projects = [
  {
    title: "Business System",
    category: "Custom Software",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description:
      "Custom enterprise software solution for business process automation",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Apps",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
    description:
      "Full-featured online shopping platform with payment integration",
  },
  {
    title: "Business App",
    category: "Mobile Apps",
    image: "https://images.pexels.com/photos/5444435/pexels-photo-5444435.jpeg",
    description: "Cross-platform mobile app for business process management",
  },
];

// Group Section
export const locations = [
  { name: "Japan HQ", city: "Tokyo", position: { top: "25%", left: "85%" } },
  {
    name: "Vietnam",
    city: "Ho Chi Minh",
    position: { top: "55%", left: "75%" },
  },
  {
    name: "Cambodia",
    city: "Phnom Penh",
    position: { top: "52%", left: "72%" },
  },
  { name: "Myanmar", city: "Yangon", position: { top: "48%", left: "68%" } },
];

export const partners = ["SAMSUNG", "Microsoft", "AWS", "Google Cloud"];

// Contact Section
export const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "#N60, Newton Rd, Elite Town III, Koh Pich, Sangkat Tonle Bassac,",
      "khan Chamkarmon, Phnom Penh,",
      "Phnom Penh, Cambodia",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+855 69 754 220"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["snishimura@brycen.com.vn"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday-Friday, 8:00AM - 5:30PM", "Sat - Sun: Closed"],
  },
];

/* * ---------------------- Page Data----------------------------------* */

// Service and Solution Page
export const servicesPage = [
  {
    icon: BrainCircuit,
    title: "AI & Data Annotation",
    description:
      "High-quality AI training data for machine learning and automation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Custom Software",
    description: "Scalable business systems tailored to your company workflow.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Modern iOS & Android applications with seamless experience.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description:
      "Secure cloud systems and infrastructure management solutions.",
  },
];

export const featuresPage = [
  "Japanese quality standards and professional development.",
  "Secure, scalable, and future-ready systems.",
  "Tailored solutions for every business need.",
  "Experienced engineers and dedicated support.",
];

// Story Page
export const timeline = [
  {
    year: "2018",
    title: "Where We Started",
    description:
      "BRYCEN CAMBODIA was founded with a mission to deliver high-quality technology services while helping local talent grow through international collaboration.",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "Growing Across Services",
    description:
      "We expanded beyond BPO into software development, cloud systems, AI annotation, and digital transformation solutions.",
    icon: Building2,
  },
  {
    year: "TODAY",
    title: "Our Vision Forward",
    description:
      "Today, we continue building scalable technology solutions while becoming a trusted long-term partner for businesses across Asia.",
    icon: Target,
  },
];

export const values = [
  "Japanese quality standards",
  "Modern scalable technology",
  "Long-term partnerships",
  "Innovation-driven culture",
];

// Company Page
export const companyValues = [
  "Integrity & Transparency",
  "Innovation & Growth",
  "Team Collaboration",
  "Customer Success",
];

export const companyServices = [
  "AI & Data Annotation",
  "Custom Software Development",
  "Mobile Application Development",
  "Network Infrastructure",
  "Managed IT Services",
];

// New Topic Page
export const newsList = [
  {
    title: "New Office at Koh Pich",
    date: "April 22, 2024",
    description:
      "BRYCEN CAMBODIA officially moved to a new office in Koh Pich area to support our growing development and offshore teams.",
    icon: Building2,
  },
  {
    title: "Welcoming BRYCEN Myanmar Team",
    date: "May 5, 2024",
    description:
      "Our Myanmar Web Development Team joined Cambodia operations to strengthen regional collaboration and custom software services.",
    icon: Users,
  },
  {
    title: "Celebrating 6 Years of BRYCEN CAMBODIA",
    date: "June 28, 2024",
    description:
      "We proudly celebrated our 6th anniversary together with our team, clients, and partners across Asia.",
    icon: PartyPopper,
  },
];
