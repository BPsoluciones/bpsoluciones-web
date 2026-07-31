import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Monitoring from './components/Monitoring';
import VideoGallery from './components/VideoGallery';
import PhotoGallery from './components/PhotoGallery';
import Services from './components/Services';
import Projects from './components/Projects';
import FAQ from './components/Faq';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-[#050711] min-h-screen">
      <Navbar />
      <Hero />
      <Monitoring />
      <VideoGallery />
      <PhotoGallery />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
    </main>
  );
}