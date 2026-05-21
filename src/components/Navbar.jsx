import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/brycen.png";
import { Sun, Moon, X, Menu } from "lucide-react";
import { navItems } from "../assets/data/data";

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.28, ease: "easeOut" },
  }),
};

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
    </span>
  );
}

function ThemeIcon({ dark }) {
  return dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
}

function LogoMark() {
  return (
    <Link to={"/"}>
      <img src={Logo} alt="Brycen Cambodia" className="w-20" />
    </Link>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Normalized fallback keys to standard 'en' and 'kh'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    if (saved === "VI" || saved === "KM" || saved === "kh") return "kh";
    return saved === "en" || saved === "EN" ? "en" : "en";
  });

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark-mode") === "true";
  });
  const [languageDropdown, setLanguageDropdown] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  // This will now listen cleanly to lowercase values and live-update the translation instantly
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 border-b border-emerald-950/10 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/88"
    >
      <div className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-14">
        <LogoMark />

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-2 xl:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <NavLink
                to={item.id}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className={({ isActive }) =>
                  `relative rounded-md px-3 py-2 text-[16px] font-medium transition-colors ${
                    isActive
                      ? "text-[#6fba38]"
                      : "text-slate-800 hover:text-[#6fba38] dark:text-slate-100 dark:hover:text-[#8bd957]"
                  }`
                }
              >
                {t(`${item.key}`)}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Language and Theme Toggle */}
        <div className="hidden items-center gap-3 xl:flex">
          {/* <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageDropdown(!languageDropdown)}
              className="flex h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-[#78bf43] dark:border-white/10 dark:bg-white/10 dark:text-slate-100 uppercase"
              aria-label="Select language"
              aria-expanded={languageDropdown}
            >
              {language}
            </button>
            <AnimatePresence>
              {languageDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-12 z-50 mt-1 w-24 rounded-md border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-neutral-900"
                >
                  {["en", "kh"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setLanguage(item);
                        setLanguageDropdown(false);
                      }}
                      className={`flex w-full items-center px-4 py-2.5 text-sm font-semibold transition-colors ${
                        language === item
                          ? "bg-[#78bf43] text-white"
                          : "text-slate-700 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-white/10"
                      } ${item === "en" ? "rounded-t-md" : "rounded-b-md"}`}
                    >
                      {item === "en" ? "English" : "ភាសាខ្មែរ"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-[#78bf43] hover:text-[#5c9f30] dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
            aria-label="Toggle dark mode"
          >
            <ThemeIcon dark={dark} />
          </button>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <a
              to="#contact"
              className="inline-block rounded-md bg-[#78bf43] px-7 py-3 text-lg font-semibold text-white shadow-[0_10px_22px_rgba(120,191,67,0.28)] transition-colors hover:bg-[#66ab35]"
            >
              {t("contact")}
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-8 w-8 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-neutral-950 xl:hidden"
          >
            <div className="space-y-4 px-4 py-5 sm:px-6">
              <nav className="grid gap-1" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                  >
                    <Link
                      to={item.id}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-lg font-semibold text-slate-800 hover:bg-[#78bf43]/10 hover:text-[#5c9f30] dark:text-slate-100 dark:hover:bg-white/10"
                    >
                      {t(`${item.key}`)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="grid grid-cols-[1fr_auto] gap-3">
                {/* Language Selector */}
                {/* <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLanguageDropdown(!languageDropdown)}
                    className="flex h-11 w-full items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white uppercase"
                    aria-label="Select language"
                    aria-expanded={languageDropdown}
                  >
                    {language}
                  </button>
                  <AnimatePresence>
                    {languageDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-12 z-50 mt-1 w-32 rounded-md border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-neutral-900"
                      >
                        {["en", "kh"].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setLanguage(item);
                              setLanguageDropdown(false);
                            }}
                            className={`flex w-full items-center px-4 py-2.5 text-sm font-semibold transition-colors ${
                              language === item
                                ? "bg-[#78bf43] text-white"
                                : "text-slate-700 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-white/10"
                            } ${item === "en" ? "rounded-t-md" : "rounded-b-md"}`}
                          >
                            {item === "en" ? "English" : "ភាសាខ្មែរ"}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div> */}
                <button
                  type="button"
                  onClick={() => setDark((value) => !value)}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  aria-label="Toggle dark mode"
                >
                  <ThemeIcon dark={dark} />
                </button>
              </div>

              <motion.div onClick={() => setOpen(false)}>
                <Link
                  to="#contact"
                  className="flex h-12 items-center justify-center rounded-md bg-[#78bf43] text-sm font-semibold text-white"
                >
                  {t("contact")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
