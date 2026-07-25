import { LangProvider } from './hooks/useLang'
import { Layout } from './components/Layout'
import { Nav } from './components/Nav'

function App() {
  return (
    <LangProvider>
      <Layout>
        <Nav />
      </Layout>
    </LangProvider>
  )
}

export default App
