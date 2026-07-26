import { FeatureStrip } from './components/FeatureStrip';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ToolGrid } from './components/ToolGrid';
import { TopNav } from './components/TopNav';

export default function App() {
  return (
    <div className="site-shell">
      <TopNav />
      <main id="main-content">
        <Hero />
        <ToolGrid />
        <FeatureStrip />
      </main>
      <Footer />
    </div>
  );
}
