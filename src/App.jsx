import About from './components/About'
import ArticlesSection from './components/ArticlesSection'
import CTASection from './components/CTASection'
import Differentials from './components/Differentials'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PracticeAreas from './components/PracticeAreas'
import StatsSection from './components/StatsSection'
import styles from './App.module.css'
import {
  articles,
  differentiators,
  footerLinks,
  navigationLinks,
  practiceAreas,
  stats,
} from './data/siteContent'

function App() {
  return (
    <div className={styles.page}>
      <Navbar links={navigationLinks} />
      <Hero />
      <About />
      <PracticeAreas areas={practiceAreas} />
      <ArticlesSection items={articles} />
      <Differentials items={differentiators} />
      <StatsSection items={stats} />
      <CTASection />
      <Footer links={footerLinks} />
    </div>
  )
}

export default App
