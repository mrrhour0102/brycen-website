import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useLocation } from "react-router-dom";
import { heroData } from "../assets/data/data";
export default function GuestLayout() {
  const location = useLocation();

  const currentHero = heroData[location.pathname] || heroData["/"];

  return (
    <section className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <PageHero {...currentHero} />
      <main className="mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
