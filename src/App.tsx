import { LangProvider } from './hooks/useLang'
import { Layout } from './components/Layout'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'

function App() {
  return (
    <LangProvider>
      <Layout>
        <Nav />
        <Hero />
        <Services />
        <Pricing />
      </Layout>
    </LangProvider>
  )
}

export default App
