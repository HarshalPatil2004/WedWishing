import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import OurStory from "./Components/OurStory";
import Gallery from "./Components/gallerysection";
import Events from "./Components/Events";
import WishingWall from "./Components/WishingWall";
import Footer from "./Components/footer";

export default function Home() {
  return (
  <>
  <Navbar />
  <LandingPage />
  <OurStory />
  <Gallery />
  <Events />
  <WishingWall />
  <Footer />
  </>
  );
}
