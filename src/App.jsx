import Footer from "./components/Footer";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LandingPage } from "./pages/LandingPage";
export default function App() {
  return (
    <>
      <Header />
      <LandingPage /> 
      <Footer />
    </>
  );
}
