import { LangProvider } from './hooks/useLang'
import { Layout } from './components/Layout'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { FloatingTelegramButton } from './components/ui/FloatingTelegramButton'

function App() {
  return (
    <LangProvider>
      <Layout>
        <Nav />
        <Hero />
        <Services />
        <Pricing />
        <Gallery />
        <Contact />
        <FloatingTelegramButton />
      </Layout>
    </LangProvider>
  )
}

export default App
