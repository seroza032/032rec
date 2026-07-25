import { LangProvider } from './hooks/useLang'
import { Nav } from './components/Nav'

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
      </div>
    </LangProvider>
  )
}

export default App
