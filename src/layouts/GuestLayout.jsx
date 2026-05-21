import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { heroData } from "../config/heroConfig";
import PageHero from "../components/sections/PageHero";
export default function GuestLayout() {
  const location = useLocation();

  const currentHero = heroData[location.pathname] || heroData["/"];

  return (
    <section className="min-h-screen ">
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] w-full">
        {currentHero.showHero !== false && <PageHero {...currentHero} />}
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
