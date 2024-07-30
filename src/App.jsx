import Footer from "./components/Footer";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LandingPage } from "./pages/LandingPage";
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <Header />
      <LandingPage /> 
      <Footer />
      <Analytics />
    </>
  );
}
